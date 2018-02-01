var postsData = require('../../data/posts-data.js') 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // this.data.postList = postsData.postList   这种方法现在的版本不行
    this.setData({
      post_key: postsData.postList
      });
  },

  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  }
  
})