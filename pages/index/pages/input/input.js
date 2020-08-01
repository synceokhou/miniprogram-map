Component({
  data: {
    showOneButtonDialog: false,
    oneButton: [{text: '确定'}],
    checkboxItems: [{
        name: '办理对公外汇业务',
        value: '0',
        checked: true
      },
      {
        name: '办理对私外汇业务',
        value: '1',
        checked: true
      }
    ],

    inputValue: '',

    cityArray: ['无要求', '南宁市', '柳州市', '桂林市', '梧州市', '北海市', '防城港市', '钦州市', '贵港市', '玉林市', '百色市', '贺州市', '河池市', '来宾市', '崇左市'],
    cityIndex: 0,
    bankArray: ['无要求', '中国银行', '中国工商银行', '中国农业银行', '中国建设银行', '交通银行', '兴业银行', '华夏银行', '中国民生银行', '浦发银行', '中国邮政储蓄银行', '中信银行', '招商银行', '中国光大银行', '平安银行', '广西北部湾银行', '桂林银行', '柳州银行', '广发银行', '农村信用合作社', '南洋商业银行', '汇丰银行', '东亚银行', '星展银行'],
    bankIndex: 0,

  },
  methods: {

    checkboxChange: function (e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);

      var checkboxItems = this.data.checkboxItems,
        values = e.detail.value;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value == values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }
      console.log(checkboxItems)
      this.setData({
        checkboxItems: checkboxItems,
      });
    },

    formInputChange(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },

    bindCityChange: function (e) {
      this.setData({
        cityIndex: e.detail.value
      })
    },

    bindBankChange: function (e) {
      this.setData({
        bankIndex: e.detail.value
      })
    },

    tapDialogButton(e) {
      this.setData({
          showOneButtonDialog: false
      })
  },

    submitForm() {
      var checkboxItems = this.data.checkboxItems
      var inputValue = this.data.inputValue
      var city
      var bank
      var corp
      var priv

      if (this.data.cityIndex == 0) {
        city = this.data.cityArray
      } else {
        city = [this.data.cityArray[this.data.cityIndex]]
      }

      if (this.data.bankIndex == 0) {
        bank = this.data.bankArray
      } else {
        bank = [this.data.bankArray[this.data.bankIndex]]
      }

      if (checkboxItems[0].checked && checkboxItems[1].checked) {
        corp = ['', '是']
        priv = ['', '是']
      } else if (checkboxItems[0].checked && (checkboxItems[1].checked == false)) {
        corp = ['是']
        priv = ['', '是']
      } else if (checkboxItems[1].checked && (checkboxItems[0].checked == false)) {
        corp = ['', '是']
        priv = ['是']
      } else {
        this.setData({
          showOneButtonDialog: true
        })
        return
      }

      wx.navigateTo({
        url: '../search/search',
        events: {
          acceptDataFromOpenedPage: function (data) {
            // console.log(data)
          },
        },
        success: function (res) {
          res.eventChannel.emit('acceptDataFromOpenerPage', {
            inputValue: inputValue,
            city: city,
            bank: bank,
            corp: corp,
            priv: priv
          })
        }
      })
    }
  }
});