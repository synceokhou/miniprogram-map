// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 22.819994,
    longitude: 108.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.onLocationChange(function(res) {
      console.log('location change', res)
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  getCenterLocation: function () {
    const that = this
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        that.mapCtx.moveToLocation(
          {
            longitude: res.longitude, 
            latitude: res.latitude,
            success(res) {
              console.log('moveToLocation succ', res)
             },
            fail(res) {
             console.log('moveToLocation fail', res)
            }
          })
      }
    })
  },
})