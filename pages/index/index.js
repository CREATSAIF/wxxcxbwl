//index.js
//获取应用实例
const app = getApp();
// #d7d6dc
// const cloud = require("wx-server-sdk");
// could.init();

// const MAX_LIMIT=100;
// exports.main = async (event,context) =>{
//   const countResult = await db.collection("R").count();
//   const total = countResult.total
//   // 计算需分几次取
//   const batchTimes = Math.ceil(total / 100)
//   // 承载所有读操作的 promise 的数组
//   const tasks = []
//   for (let i = 0; i < batchTimes; i++) {
//     const promise = db.collection('todos').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
//     tasks.push(promise)
//   }
//   // 等待所有
//   return (await Promise.all(tasks)).reduce((acc, cur) => {
//     return {
//       data: acc.data.concat(cur.data),
//       errMsg: acc.errMsg,
//     }
//   })
// }
var dataUrl = '../../voice/553534.mp3'
var util = require("../../utils/util.js");

function editArr(arr,i,editCnt){
  let newArr = arr.editingObj = newArr[i];
  newArr.map(function(a){
    if(a.id == i){
      for (var x in editCnt){
        a[x]=editCnt[x];
      }
    }
  })
    // for (var x in editCnt){
    //   editingObj[x]= editCnt[x];
    // }
    return newArr;
}


Page({
  data: {
    isHideLoadMore: true,
    pageCount: 60,
    page: 0,
    user: {},
    visible: '',
    listData: [],
    refresh: false,
  },
  // toRead: function(e) {
  //   var id = e.currentTarget.dataset.objectid;
  //   wx.navigateTo({
  //     url: '../read/read?id=' + id,
  //   })
  // },

//   loginAPI: function() {
//     app.globalData.API.User.login('','').then(res => {
//       console.log(res),
//         this.setData({
//           user: res,
//         })
//       console.log(this.data.user)
//     }).catch(err => {
//       console.log(err)
//     });
//   },

//   getList: function(refresh) {
//     var that = this;
//     const query = app.globalData.API.Query("R");
//     query.equalTo("id", "==", app.globalData.userId);
//     query.equalTo("open", "!=", true);
//     query.equalTo("visible", "==", true);
//     query.order("-updatedAt");
//     query.limit(this.data.pageCount);
//     query.skip(this.data.pageCount * this.data.page);
//     query.find().then(res => {
//       console.log(res)
//       if (refresh) {
//         wx.stopPullDownRefresh() //停止下拉刷新
//         for (var i = 0; i < res.length; i++) {
//           res[i]['index'] = (i + 1);
//         }
//       } else {
//         this.setData({
//           isHideLoadMore: true,
//         })
//         for (var i = 0; i < res.length; i++) {
//           res[i]['index'] = (this.data.listData.length + i + 1);
//         }
//       }
//       if (refresh) {
//         this.setData({
//           listData: res,
//         });
//       } else {
//         if (res.length == 0) {
//           wx.showToast({
//             title: '没有更多数据啦~',
//             icon: 'none'
//           })
//           return
//         }
//         this.setData({
//           listData: this.data.listData.concat(res),
//         })
//       }
//       that.data.page++;
//     });
//   },

//   onPullDownRefresh: function() {
//     this.setData({
//       page: 0,
//       refresh: true,
//     })
//     if (app.globalData.userId.length < 1) {
//       this.setData({
//         visible: ''
//       })
//     } else {
//       this.setData({
//         visible: 'display:none'
//       })
//     }
//     this.getList(true);
//   },

//   onReachBottom: function() {
//     if (this.data.page > 0) {
//       this.setData({
//         isHideLoadMore: false,
//       })
//       this.getList(false);
//     }
//   },

//   onShow: function() {
//     if (!app.globalData.refreshIndex) {
//       return
//     }
//     wx.startPullDownRefresh();
//     this.onPullDownRefresh();
//   },

//   toSearch: function() {
//     wx.navigateTo({
//       url: '../search/search',
//       success: function() {},
//       fail: function() {},
//       complete: function() {}
//     })
//   },

//   onMenu: function(e) {
//     var that = this;
//     console.log(e)
//     var index = e.currentTarget.dataset.index;
//     wx.showActionSheet({
//       itemList: ['编辑', '删除', '复制'],
//       success: function(res) {
//         console.log(res.tapIndex)
//         switch (res.tapIndex) {
//           case 0:
//             wx.showToast({
//               title: '编辑功能暂未开放~',
//               icon: 'none'
//             })
//             break;
//           case 1:
//             const query = app.globalData.API.Query('Riji');
//             query.destroy(e.currentTarget.dataset.objectid).then(res => {
//               console.log(res)
//               wx.showToast({
//                 title: '删除成功~',
//               })
//               that.data.listData.splice(e.currentTarget.dataset.index - 1, 1)
//               for (var i = 0; i < that.data.listData.length; i++) {
//                 that.data.listData[i]['index'] = (i + 1);
//               }
//               that.setData({
//                 listData: that.data.listData
//               });
//             }).catch(err => {
//               console.log(err)
//             })
//             break;
//           case 2:
//             console.log(res)
//             wx.showToast({
//               title: '复制成功~',
//             })
//             wx.setClipboardData({
//               data: that.data.listData[index - 1].content,
//               success: function(res) {
//                 console.log(res)
//               }
//             })
//             break;
//         }
//       },
//       fail: function(res) {
//         console.log(res.errMsg)
//         wx.showActionSheet({

//         })
//       }
//     })
//   },

  toWrite: function() {
    // if (app.globalData.userId.length < 1) {
    //   wx.showToast({
    //     title: '请登录~',
    //     icon: 'none'
    //   })
    //   return
    // }
    wx.navigateTo({
      url: '../write/write',
      success: function() {},
      fail: function() {},
      complete: function() {}
    })
  },
//   onLoad: function() {
//     if (app.globalData.lockCount > 0) {
//       return
//     }
//     wx.getStorage({
//       key: 'userId',
//       success: function(res) {
//         app.globalData.userId = res.data;
//       },
//     })
//     this.isLock();
//   },

//   isLock: function() {
//     wx.getStorage({
//       key: 'lock',
//       success: function(res) {
//         console.log(res.data)
//         if (res.data.length > 0) {
//           wx.redirectTo({
//             url: '../unlock/unlock',
//           })
//         }
//       },
//       fail: function(e) {
//         console.log(e)
//       }
//     })
//   },




 })