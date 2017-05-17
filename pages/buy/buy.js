// pages/buy/buy.js
var app = getApp();
Page({

  data: {
    length: '',
    buyArr: [],
    siteChooseflag: true,
    siteChoose: '请选择一个收货地址',
    buySite: '',
    name: '',
    m: '',
    f: '',
    site: '',
    jg: 0,
  },
  onLoad: function (options) {
    this.setData({
      buyArr: app.buyArr[0],
    })
    var allJg = this.data.buyArr;
    var allPrice = 0;
    for (var i = 0; i < allJg.length; i++) {
      allPrice += allJg[i].buyNum * Number(allJg[i].buyPrice)
    };
    this.setData({
      jg: allPrice,
      buySite: this.data.buyArr[0].buySite
    })
  },
  onShow: function () {
    // 页面显示
    var that = this;
    wx.getStorage({
      key: 'siteId',
      success: function (res) {
        var nowName = app.arr[res.data];
        console.log(nowName)
        that.setData({
          siteChooseflag: false,
          name: app.arr[res.data].name,
          m: app.arr[res.data].m,
          f: app.arr[res.data].f,
          site: app.arr[res.data].site
        })
      }
    })
  },
  nextbuy: function () {
    var _this=this;
    if (this.data.jg > 0) {
      var data={
                buyArr:_this.data.buyArr,
                buyDate:new Date().getTime(),
                buySite:_this.data.buySite
      }
      console.log(data)
      wx.showModal({
        title: '支付提醒',
        content: '支付金额：' + this.data.jg + '元',
        success: function (res) {
          if (res.confirm) {
            wx.request({
              url: app.url+'/wxbuy',
              data:data,
              method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              // header: {}, // 设置请求的 header
              success: function(res){
                // success
                console.log(res.data.tips)
                
              },
              fail: function() {
                // fail
              },
              complete: function() {
                // complete
              }
            })
            console.log(_this.data.buyArr)
            // wx.switchTab({
            //   url: '../main/main',
            //   success: function (res) {
            //     // success
            //   },
            //   fail: function () {
            //     // fail
            //   },
            //   complete: function () {
            //     // complete
            //   }
            // })

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  bz: function (e) {
    console.log(e.detail.value)
  },
  chooseSite: function () {
    wx.navigateTo({
      url: '../site/site?flag=true',
      success: function (res) {

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})