//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    hasLogin: false,
    openid: null,
    wxcode: null,
    userInfo: null,
    vipAppId: 'wxb785adc6d8519686',
    wxurl: 'https://wx.4006002222.com/wxmppc/WxService?method=',
    memberCardid: 'pZv8rsz0E5BTkH6Tuqn0zqEnN_es',
    wxImgUrl: 'http://wx.4006002222.com/qyweb',
    ztUrl: 'https://wx.4006002222.com/ztapi',
    ztImgUrl: 'http://image.4006002222.com',
    qyUrl: 'https://wx.huanai.com/qy/WxService?method=',
    MemberCard: '',
    store_eid: "b73680c334984f358a9567e135805b6e" //门店评价模板id
  }
})