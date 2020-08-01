Page({
  data: {
    deptList: [],
    deptIndex: 0
  },
  onLoad: function (option) {
    var that = this
    const eventChannel = this.getOpenerEventChannel()
    const db = wx.cloud.database({
      env: 'map-d2w7c'
    })
    const _ = db.command
    eventChannel.emit('acceptDataFromOpenedPage', {
      data: 'acceptDataFromOpenedPage'
    });
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      var inputValue = data.inputValue
      var city = data.city
      var bank = data.bank
      var corp = data.corp
      var priv = data.priv

      db.collection('map').where({
        name: db.RegExp({
          regexp: inputValue,
          options: 'i',
        }),
        city:_.in(city),
        bank:_.in(bank),
        corp:_.in(corp),
        priv:_.in(priv),
      }).get({
        success: function (res) {
          that.setData({
            deptList: res.data
          })
        }
      })
    })
  }
});