//引用数据文件
var postsData = require('/../../../data/posts-data.js') 

Page({
    onLoad:function(option){
      var postId = option.id;
      var postData = postsData.postList[postId];
      //只要设置到数据绑定就使用this.setData方法.
      // this.data.postList = postsData.postList
      this.setData({
        postData: postData
      })

      // 收藏处-本地返存
      // wx.setStorageSync("key","风暴英雄")添加缓存
      wx.setStorageSync("key", {
        game:"风暴英雄",
        developer:"暴雪"
      })
    },
      //获取缓存
    onCollectionTap:function(event){   
      var game = wx.getStorageSync("key")
      console.log(game)
    },

    //清楚缓存
    onShareTap:function(event){
      // wx.removeStorageSync("key")
      wx.clearStorageSync("key")                                                 
    }
})