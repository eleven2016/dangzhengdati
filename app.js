//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    
  },
  globalData: {
    problems: [
      {
        id: 1,
        content: "为了深化国家监察体制改革，加强对（）的监督，实现国家监察全面覆盖，深入开展反腐败工作，推进国家治理体系和治理能力现代化，根据宪法，制定《中华人民共和国监察法》。",
        options: [
          {
            code: "A",
            content: "全体党员"
          },
          {
            code: "B",
            content: "公务员"
          },
          {
            code: "C",
            content: "领导干部"
          },
          {
            code: "D",
            content: "所有行使公权力的公职人员"
          }
        ],
        answer: "D"
      },
      {
        id: 2,
        content: "监察委员会对违法的公职人员依法作出（）决定。",
        options: [
          {
            code: "A",
            content: "政纪处分"
          },
          {
            code: "B",
            content: "党纪政纪处分"
          },
          {
            code: "C",
            content: "政务处分"
          },
          {
            code: "D",
            content: "党纪政务处分"
          }
        ],
        answer: "C"
      },
      {
        id: 3,
        content: "监察委员会依照《中华人民共和国监察法》和有关法律规定履行（）、（）、（）职责。",
        options: [
          {
            code: "A",
            content: "预防、制止、惩治"
          },
          {
            code: "B",
            content: "监督、调查、问责"
          },
          {
            code: "C",
            content: "监督、执纪、问责"
          },
          {
            code: "D",
            content: "监督、调查、处置"
          }
        ],
        answer: "D"
      },
      {
        id: 4,
        content: "监察机关应当严格按照程序开展工作，建立问题线索处置、调查、审理各部门（）、（）的工作机制。",
        options: [
          {
            code: "A",
            content: "相互监督、相互制约"
          },
          {
            code: "B",
            content: "相互统筹、相互协调"
          },
          {
            code: "C",
            content: "相互协调、相互制约"
          },
          {
            code: "D",
            content: "互联互通、监督制约"
          }
        ],
        answer: "C"
      },
      {
        id: 5,
        content: "国家监察委员会依照法律规定独立行使（）。",
        options: [
          {
            code: "A",
            content: "监督权"
          },
          {
            code: "B",
            content: "监察权"
          },
          {
            code: "C",
            content: "督查权"
          },
          {
            code: "D",
            content: "检查权"
          }
        ],
        answer: "B"
      },
      {
        id: 6,
        content: "凡是成立党的新组织，或是撤销党的原有组织，必须由（）决定",
        options: [
          {
            code: "A",
            content: "上级党组织"
          },
          {
            code: "B",
            content: "上级党委和政府"
          },
          {
            code: "C",
            content: "党中央"
          },
          {
            code: "D",
            content: "上级党组织和纪委"
          }
        ],
        answer: "A"
      },
      {
        id: 7,
        content: "党的十九大报告指出，以城市群为主体构建大中小城市和小城镇协调发展的城镇格局，加快（）。",
        options: [
          {
            code: "A",
            content: "农村人口城镇化"
          },
          {
            code: "B",
            content: "农村人口市民化"
          },
          {
            code: "C",
            content: "农业就业人口城镇化"
          },
          {
            code: "D",
            content: "农业转移人口市民化"
          }
        ],
        answer: "D"
      },
      {
        id: 8,
        content: "以党的（）为统领，全面推进党的政治建设、思想建设、组织建设、作风建设、纪律建设，把（）贯穿其中，深入推进反腐败斗争，全面提高党的建设科学化水平。",
        options: [
          {
            code: "A",
            content: "思想建设、党规建设"
          },
          {
            code: "B",
            content: "思想建设、机制建设"
          },
          {
            code: "C",
            content: "政治建设、制度建设"
          },
          {
            code: "D",
            content: "政治建设、党规建设"
          }
        ],
        answer: "C"
      },
      {
        id: 9,
        content: "坚持全面从严治党，必须以（）为根本遵循，把党的政治建设摆在首位。",
        options: [
          {
            code: "A",
            content: "宪法"
          },
          {
            code: "B",
            content: "党章"
          },
          {
            code: "C",
            content: "党的纪律"
          },
          {
            code: "D",
            content: "党内法规体系"
          }
        ],
        answer: "B"
      },
      {
        id: 10,
        content: "（）是引领发展的第一动力，是建设现代化经济体系的战略支撑。",
        options: [
          {
            code: "A",
            content: "改革"
          },
          {
            code: "B",
            content: "创新"
          },
          {
            code: "C",
            content: "开放"
          },
          {
            code: "D",
            content: "科技"
          }
        ],
        answer: "B"
      },
    ]
  }
})