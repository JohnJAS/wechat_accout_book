//operate.js

Page({
  //事件：进行账目操作
  gotoDetail: function (event) {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
})