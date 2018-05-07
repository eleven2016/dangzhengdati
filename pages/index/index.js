//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      userName:"",
      userPhone:"",
      answers:[],
      problems: app.globalData.problems,
      score:0
  },
  //提交答案
  onSubmit: function () {
    if (!this.data.userName || this.data.userName == ""){
      wx.showToast({
        title:"请输入姓名!",
        icon:"none",
        duration:2000,
        mask:true
      });
      return;
    }
    if (!this.data.userPhone || this.data.userPhone == "") {
      wx.showToast({
        title: "请输入手机号!",
        icon: "none",
        duration: 1000,
        mask: true
      });
      return;
    } else if (this.data.userPhone.length != 11){
      wx.showToast({
        title: "请输入正确的手机号!",
        icon: "none",
        duration: 1000,
        mask: true
      });
      return;
    }
    //校验答案必须选择
    var tempArray=[]
    for (var i = 1; i <this.data.answers.length;i++){
      if (this.data.answers[i] && null != this.data.answers[i] ){
        tempArray.push(this.data.answers[i])
      }
    }
    if (tempArray.length != app.globalData.problems.length){
      wx.showToast({
        title: "您还未完成答题!",
        icon: "none",
        duration: 1000,
        mask: true
      });
      return;
    }

    var userName = this.data.userName;
    var phone = this.data.userPhone;
    var score = this.data.score;
    var score_content = "您的最终得分是：" + score+"分";

    wx.showModal({
      title: "恭喜您完成答题!",
      content: score_content,
      showCancel:false,
      confirmColor:"#ff0000",
      complete:function(){
        //自定义事件分析,用于提交数据
        wx.reportAnalytics('dangfeng_score_result', {
          score_result: score,
          user_name: userName,
          user_phone: phone,
        });
        // console.log(userName + "---" + phone + "---" + score)
      },
      success:function(){
        wx.redirectTo({
          url: 'index'
        })
      }
    });
  },
  //输入名称
  bindNameInput:function(e){
    this.data.userName = e.detail.value;
  },
  //输入手机号
  bindPhoneInput: function (e) {
    this.data.userPhone = e.detail.value;
  },
  //选择答案
  bindAnswer:function(e){
    var valueArray = e.detail.value.split("-");
    var index = valueArray[0];
    var value = valueArray[1];
    this.data.answers[index] = value;
    this.data.score = this.checkAnswer(this.data.answers);
  },
  //检查提交结果
  checkAnswer:function(answers){
    var score=0;
    for (var i = 0; i < app.globalData.problems.length;i++){
      if (answers[i + 1] && null != answers[i + 1]){
        if (answers[i+1] == app.globalData.problems[i].answer) {
          score++;
        }
      }
    }
    return score;
  }
})
