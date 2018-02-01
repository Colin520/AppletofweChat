Page({
  onTap:function(event){
    // wx.navigateTo({
    //   url: '../posts/post',
    // });

    wx:wx.redirectTo({
      url: '../posts/post',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
})