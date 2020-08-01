Page({
  onShareAppMessage() {
    return {
      title: '查看位置',
      path: 'pages/index/pages/open-location/open-location'
    }
  },

  data: {
    address: '',
    bank: '',
    city: '',
    corp: '',
    lat: '',
    lng: '',
    name: '',
    phone: '',
    priv: '',
    busniess: ''
  },

  onLoad: function(option){
    this.setData({
      address: option.address,
      bank: option.bank,
      city: option.city,
      corp: option.corp,
      lat: option.lat,
      lng: option.lng,
      name: option.name,
      phone: option.phone,
      priv: option.priv
    })
    if (this.data.priv=='是'&&this.data.corp=='是') {
      this.setData({
        busniess: '对公、对私业务'
      })
    } else if (this.data.priv==''&&this.data.corp=='是') {
      this.setData({
        busniess: '对公业务'
      })
    } else if (this.data.priv=='是'&&this.data.corp=='') {
      this.setData({
        busniess: '对私业务'
      })
    }
  },

  openLocation(e) {
    var longitude = this.data.lng
    var latitude = this.data.lat
    var name = this.data.name
    var address = this.data.address
    wx.openLocation({
      longitude: Number(longitude),
      latitude: Number(latitude),
      name: name,
      address: address
    })
  }
})
