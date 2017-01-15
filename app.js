App({
  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: () => {
    const logs = wx.getStorageSync('logs') || [] // 调用API从本地缓存中获取数据
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  /**
   * 生命周期函数--监听小程序显示
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: () => {
    console.log('onShow')
  },
  /**
   * 生命周期函数--监听小程序隐藏
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: () => {
    console.log('onHide')
  },
  /**
   * 错误监听函数
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: msg => {
    console.error(`error: $msg`)
  },
  /**
   * 其他函数
   */
  getUserInfo: function (cb) {
    if (this.globalData.userInfo) {
      typeof cb == 'function' && cb(this.globalData.userInfo)
    } else {
      wx.login({ // 调用登录接口
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              typeof cb == 'function' && cb(this.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  /**
   * 数据
   */
  globalData: {}
})