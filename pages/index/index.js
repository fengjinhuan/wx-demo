//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    arr:[],
  },
  // 后门餐饮数据获取
  hm:function(){
    var _this=this;
    wx.request({
      url: app.url+'/wxhm',
      data: {
        "name":"冯晋环"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        _this.setData({
          arr:res.data.tips
        })
        
      },
      fail: function() {
        // fail
        console.log('err')
      },
      complete: function() {
        // complete
      }
    })
  },
  // 餐厅数据获取
  ct:function(){
    var _this=this;
    wx.request({
      url: app.url+'/wxct',
      data: {
        "name":"冯晋环"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        _this.setData({
          arr:res.data.tips
        })
       
      },
      fail: function() {
        // fail
        console.log('err')
      },
      complete: function() {
        // complete
      }
    })
  },
  // 宿舍零食数据获取
  ls:function(){
    var _this=this;
      wx.request({
      url: app.url+'/wxls',
      data: {
        "name":"冯晋环"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        _this.setData({
          arr:res.data.tips
        })
      
      },
      fail: function() {
        // fail
        console.log('err')
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad:function(options){
    var _this=this;
    wx.request({
      url: app.url+'/wxhm',
      data: {
        "name":"冯晋环"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        _this.setData({
          arr:res.data.tips
        })
       
      },
      fail: function() {
        // fail
        console.log('err')
      },
      complete: function() {
        // complete
      }
    })
    
  },
})
