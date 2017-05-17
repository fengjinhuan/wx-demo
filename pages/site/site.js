var app = getApp();
app.arr = [
  {
    id: 0,
    name: '第一个',
    m: '13283541425',
    site: '能源学院',
    f: '3号楼419',
    delFlag: false,
  },
  {
    id: 1,
    name: '第二个',
    m: '13283541425',
    site: '能源学院',
    f: '3号楼419',
    delFlag: true,
  }
];
Page({
  data: {
    buyFlag: false,
    flag: false,
    siteArr: app.arr
  },
  onLoad: function (option) {
    this.data.buyFlag = option.flag;
  },
  item: function (event) {
    wx.setStorage({
      key: 'siteId',
      data: event.currentTarget.dataset.num,
      success: function (res) {

        console.log(res.data)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    if (this.data.buyFlag) {
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      })
    }
  },


  siteAdd: function () {
    wx.redirectTo({
      url: '../add/add',
    })
  },
  siteDel: function () {
    this.setData({
      flag: !this.data.flag
    })
  },

  siteDelBtn: function (event) {
    var dataset = event.target.dataset;
    var delID = dataset.del;
    this.data.siteArr.splice(delID, 1)
    var that=this;
    wx.showModal({
  title: '提示',
  content: '删除此地址？',
  success: function(res) {
    if (res.confirm) {
      that.setData({
      siteArr: that.data.siteArr
    })
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
    
  },

})