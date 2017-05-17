Page({
  siteTap: function () {
    wx.navigateTo({
      url: '../site/site',
      success: function (res) {
        // success
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