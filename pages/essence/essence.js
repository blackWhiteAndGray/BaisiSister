var app = getApp()
var memCode = wx.getStorageSync('memberCard').memberCard

// pages/essence/essence.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      app.globalData.wxImgUrl + '/miniImg/home/slider03.png',
      app.globalData.wxImgUrl + '/miniImg/home/slider01.png',
      app.globalData.wxImgUrl + '/miniImg/home/slider02.png'
    ],
    cardBg: app.globalData.wxImgUrl + "/miniImg/home/card-bg.png",
    iconCizhuan: app.globalData.wxImgUrl + "/miniImg/home/icon-cizhuan.png",
    iconChugui: app.globalData.wxImgUrl + "/miniImg/home/icon-chugui.png",
    iconJiaju: app.globalData.wxImgUrl + "/miniImg/home/icon-jiaju.png",
    iconWeiyu: app.globalData.wxImgUrl + "/miniImg/home/icon-weiyu.png",
    picScale: app.globalData.wxImgUrl + "/miniImg/home/pic-scale.png",
    picHotactivity: app.globalData.wxImgUrl + "/miniImg/home/pic-hotactivity.png",
    picPuliccomment: app.globalData.wxImgUrl + "/miniImg/home/pic-puliccomment.png",
    picHead1: app.globalData.wxImgUrl + "/miniImg/home/pic-head1.png",
    iconMarco: app.globalData.wxImgUrl + "/miniImg/home/icon-marco.png",
    iconAichi: app.globalData.wxImgUrl + "/miniImg/home/icon-aichi.png",
    iconArrow: app.globalData.wxImgUrl + "/miniImg/home/icon-arrow.png",
    iconCobbe: app.globalData.wxImgUrl + "/miniImg/home/icon-cobbe.png",
    iconFaenzr: app.globalData.wxImgUrl + "/miniImg/home/icon-faenzr.png",
    iconHaier: app.globalData.wxImgUrl + "/miniImg/home/icon-haier.png",
    iconHolike: app.globalData.wxImgUrl + "/miniImg/home/icon-holike.png",
    iconMona: app.globalData.wxImgUrl + "/miniImg/home/icon-mona.png",
    iconOlo: app.globalData.wxImgUrl + "/miniImg/home/icon-olo.png",
    picAdvantage: app.globalData.wxImgUrl + "/miniImg/home/pic-advantage.png",
    picScaleIntro: app.globalData.wxImgUrl + "/miniImg/home/pic-scaleIntro.png",

    indicatorDots: true,
    autoplay: true,
    modalHidden: true,
    jhmodalHidden: true,
    interval: 5000,
    duration: 1000,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hnextraData: {
      "encrypt_card_id": "yMwPgGYOAGUOnr7kUqkB+VF3cfLkWIjGVvfCRFSn9PfR9GtJ6NbW6i7CUk+4MS53",
      "outer_str": "HN",
      "biz": "MzAwNjAwNTA5NA=="
    },
    floorstatus: false,
    scrollTop: 0,
    animationData: {}
  },

  /**
   * 刷新会员卡
   */
  getMemberCard: function() {
    var that = this;
    if (app.globalData.MemberCard && app.globalData.MemberCard != '') {
      this.setData({
        userCardId: app.globalData.MemberCard
      });
    } else {
      app.memberCardCallback = memberCard => {
        that.setData({
          userCardId: memberCard
        });
      }
    }
  },
  /**
   * 刷新会员卡
   */
  sxMemberCard: function() {
    app.getMemberCard();
    var that = this;
    if (app.globalData.MemberCard && app.globalData.MemberCard != '') {
      this.setData({
        userCardId: app.globalData.MemberCard
      });
    } else {
      app.memberCardCallback = memberCard => {
        that.setData({
          userCardId: memberCard
        });
      }
    }
  },
  getUserInfo: function() {
    var that = this;
    if (app.globalData.userInfo && app.globalData.userInfo != '') {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      app.userInfoCallback = useres => {
        that.setData({
          userInfo: app.globalData.userInfo
        })
      }
    }
  },
  /**
   * 添加会员卡
   */
  addMemCard: function() {
    this.setData({
      jhmodalHidden: false,
      modalHidden: true
    })
    //使用新版本领取会员卡
    // var wxmain = require('../../../wxmain.js');
    // wxmain.miniAddCard({
    //   cardid: app.globalData.memberCardid,
    //   appid: app.globalData.vipAppId,
    //   callback: function (res) {
    //     console.log(res)
    //   },
    //   callbackfail: function (res) {
    //     console.log(res)
    //   }
    // })
  },
  /**
   * 未刷新
   */
  cancellChange: function() {
    this.setData({
      modalHidden: true,
      jhmodalHidden: true
    })
  },
  /**
   * 确认领取
   */
  qrjh: function() {
    this.setData({
      modalHidden: true,
      jhmodalHidden: true
    })
    this.sxMemberCard();
  },
  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
  },
  // 跳转页面的方法
  toPage: function(e) {
    var pageId = e.currentTarget.dataset.pageid;
    if (this.data.userCardId) {
      if (pageId == 'scale') {
        wx.navigateToMiniProgram({
          appId: 'wxa9a4b76906fd01bd',
          path: 'pages/index/index',
          success(res) {
            // 打开成功
          }
        })
        // wx.navigateTo({
        //   url: '../scale/scaleList/scaleList',
        // })
      } else if (pageId == 'hotActivity') {
        wx.navigateTo({
          url: '../hotActivity/hotActivity',
        })
      } else if (pageId == 'itemRule') {
        wx.navigateTo({
          url: '../itemRule/itemRule/itemRule',
        })
      } else if (pageId == 'publicComment') {
        wx.navigateTo({
          url: '../publicComment/showComment/showComment',
        })
      } else if (pageId == 'product') {
        var typeCode = e.currentTarget.dataset.type;
        var name = e.currentTarget.dataset.name;
        wx.navigateTo({
          url: '../product/proList/proList?typeCode=' + typeCode + '&typeName=' + name,
        })
      } else if (pageId == 'moreProduct') {
        wx.navigateTo({
          url: '../product/proList/proList?'
        })
      } else if (pageId == 'brand') {
        var brand = e.currentTarget.dataset.brand;
        var name = e.currentTarget.dataset.name;
        wx.navigateTo({
          url: '../product/proList/proList?brandCode=' + brand + '&brandName=' + name,
        })
      }
    } else {
      this.setData({
        modalHidden: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getUserInfo();
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
    this.getMemberCard();
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
   * 页面滚动渐变导航栏
   */
  scroll: function(e) {
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear',
    })

    this.animation = animation
    if (e.detail.scrollTop <= 0) {
      animation.opacity(0).step()
      this.setData({
        floorstatus: false
      })
    } else if (e.detail.scrollTop > 0 && e.detail.scrollTop <= 100) {
      var scale = (e.detail.scrollTop) / 100
      animation.opacity(scale).step()
      this.setData({
        floorstatus: true
      })
    } else {
      animation.opacity(1).step()
      this.setData({
        floorstatus: true
      })
    }

    this.setData({
      animationData: animation.export()
    })
  }
})