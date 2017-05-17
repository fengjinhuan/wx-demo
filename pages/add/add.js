var app = getApp();
Page({
  data: {
    backBuyflag: false,
  },
  formSubmit: function (e) {
    this.setData({
      name: e.detail.value.name,
      m: e.detail.value.m,
      site: e.detail.value.site,
      f: e.detail.value.f,
      delFlag: false,
    }),
      app.arr.push(this.data)
    wx.getStorage({
      key: 'siteId',
      success: function (res) {

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    wx.redirectTo({
      url: '../site/site?flag=true',
      success: function (res) {
      }
    })

  }
})