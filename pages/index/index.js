//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },

  onLoad: function () {
   
  },

  gotoItemPage: function() {
    wx.navigateTo({
      url: '/pages/item/item',
    })
  }
})
