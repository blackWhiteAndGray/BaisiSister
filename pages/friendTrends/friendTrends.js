Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../../images/hn/dongdong.png',
    mode: 'scaleToFill',
    text: '快快登录吧，关注百思最in牛人\n好友动态让你过把瘾儿~\n噢耶~~~~!',
    disabled: false,
    plain: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setBackgroundColor({
      backgroundColor: '#EAEAEA', // 窗口的背景色为白色
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 登录
   */
  login: function() {
    wx.navigateTo({
      url: '../attention/attention',
    })
  }
})