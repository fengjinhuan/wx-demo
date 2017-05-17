//app.js
var API_URL = 'http://127.0.0.1:3000/wxlogin'

App({

  url: 'http://127.0.0.1:3000',
  buyArr: [],

  onLaunch: function () {
    wx.login({//login流程
      success: function (res) {
        console.log(res)//登录成功
        console.log(res)
        if (res.code) {
         

        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  
})