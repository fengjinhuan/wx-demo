var app = getApp()
Page({
    onLoad:function(options){
        var _this=this;
        var name=options.name;
        console.log(name)
        wx.request({
          url: app.url+'/wxlist',
          data: {
              name:name
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            _this.setData({
                listArr:res.data.tips,
                siteName:name
            })
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },
    data: {
        nameArr:[],
        numArr:[],
        piceArr:[],
        hidden: false,
        jg: 0,
        listArr: [],
        siteName:'',
    },
    listAdd: function (event) {
        var nowid = event.target.dataset.id;
        if (this.data.jg >= 0) {
            ++this.data.listArr[nowid].num
            this.data.jg+= Number(this.data.listArr[nowid].price)
            this.data.listArr[nowid].flag = true;
            this.setData({
                hidden: true,
                jg: this.data.jg,
                listArr: this.data.listArr
            })
    
        }
    },
    listJian: function (event) {
        if (this.data.jg <= 0) {
            this.setData({
                hidden: false,
            })

        }
        var nowid = event.target.dataset.id;
        if (this.data.listArr[nowid].num >= 1) {
            if (this.data.listArr[nowid].num == 1) {
                this.data.listArr[nowid].flag = false;
            }
            this.data.listArr[nowid].num--;
            this.data.jg -= this.data.listArr[nowid].price
            this.setData({
                hidden: this.data.hidden,
                jg: this.data.jg,
                listArr: this.data.listArr
            })
        }
    },
    nexBuy: function () {
        var that=this;
        var buy=this.data.listArr;
        var buyArr=[];
        for(var i=0;i<buy.length;i++){
            if(buy[i].num>0){
                var buyObj={
                    buyName:buy[i].name,
                    buyPrice:buy[i].price,
                    buyNum:buy[i].num,
                    buySite:this.data.siteName
                }
                buyArr.push(buyObj)
                 wx.navigateTo({
                    url: '../buy/buy',
                    success: function(res){
                        app.buyArr=[buyArr];
                    },
                    fail: function() {
                        
                    },
                    complete: function() {
                        // complete
                    }
                 })
            }
        }
       
      
    }
})