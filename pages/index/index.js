Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage() {
    return {
      title: '小程序官方组件展示',
      path: 'page/component/index'
    }
  },

  data: {
    list: [
      {
        id: 'search',
        name: '搜索指定网点',
        open: false,
        pages: [{
          path: 'input',
          name: '马上搜索'
        }]
      }, {
        id: 'corp-map',
        name: '查看附近办理外汇业务网点',
        open: false,
        pages: [{
          path: 'corp-map',
          name: '对公外汇业务'
        },{
          path: 'priv-map',
          name: '对私外汇业务'
        }]
      }
    ]
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})