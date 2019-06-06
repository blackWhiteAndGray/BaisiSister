Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList: [],
    scrollTop: 0,
    floorstatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getAttensionData(),
    wx.setBackgroundColor({
      backgroundColor: '#C71585'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 获取推荐关注数据
   */
  getAttensionData: function() {
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://api.budejie.com/api/api_open.php',
      data: {
        a: 'friend_recommend',
        c: 'user'
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data && res.data.hot_list) {
          that.setData({
            hotList: res.data.hot_list
          })
        }

        console.log(that.hotList)
      },
      fail(error) {
        console.log(error)
      },
      complete() {
        wx.hideLoading()
      }
    })
  },

  /**
   * 返回上个页面
   */
  onClickLeft() {
    wx.navigateBack({
      delta: 1
    })
  },

  goTop: function(e) {
    this.setData({
      scrollTop: 0
    })
  },

  scroll: function(e) {
    if (e.detail.scrollTop > 100) {
      this.setData({
        floorstatus: true
      })
    } else {
      this.setData({
        floorstatus: false
      })
    }
  }
})