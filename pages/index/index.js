const app = getApp() // 获取应用实例
Page({
  data: { // 页面的初始数据
    motto: 'Hello World'
  },
  onLoad: function () { // 生命周期函数--监听页面加载
    console.log('onLoad')
    app.getUserInfo(userInfo => { // 调用应用实例的方法获取全局数据
      this.setData({ // 更新数据
        userInfo: userInfo
      })
    })
  },
  onReady: () => { // 生命周期函数--监听页面初次渲染完成
    console.log('onReady')
  },
  onShow: () => { // 生命周期函数--监听页面显示
    console.log('onShow')
  },
  onHide: () => { // 生命周期函数--监听页面隐藏
    console.log('onHide')
  },
  onUnload: () => { // 生命周期函数--监听页面卸载
    console.log('onUnload')
  },
  onPullDownRefresh: () => { // 页面相关事件处理函数--监听用户下拉动作
    console.log('onPullDownRefresh')
  },
  onReachBottom: () => { // 页面上拉触底事件的处理函数
    console.log('onReachBottom')
  },
  onShareAppMessage: () => { // 用户点击右上角分享
    console.log('onShareAppMessage')
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: 'pages/index/index'
    }
  },
  // 开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问
  bindViewTap: function (event) {
    console.log(`bindViewTap: ${event}`)
    this.setData({ // 更新数据
      motto: `Hello ${this.data.userInfo.nickName}`
    })
  }
})