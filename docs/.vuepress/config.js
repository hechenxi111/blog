module.exports = {
  "title": "樱桃没丸子",
  "description": "真是充实的一天",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitLab",
            "link": "https://gitlab.com/bobyuan/",
            "icon": "reco-gitlab"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "bilibili",
        "desc": "哔哩哔哩干杯",
        "link": "https://www.bilibili.com/"
      },
      {
        "title": "iqiyi",
        "desc": "隐秘的角落",
      
        "link": "https://www.iqiyi.com/"
      }
    ],
	"logo": "/logo_trans.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": " He Chenxi",
    "authorAvatar": "/avatar.png",
    //"record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": false
  }
}