var shopData = [{
        "id": 8,
        "name": "小型超市 / 便利店 / 零售商店"
    },
    {
        "id": 9,
        "name": "小吃 / 快餐 / 美食城"
    },
    {
        "id": 10,
        "name": "水果零售 / 蔬菜零售"
    },
    {
        "id": 11,
        "name": "水吧 / 饮料 / 冷饮"
    },
    {
        "id": 12,
        "name": "药品 / 医疗 / 保健"
    },
    {
        "id": 13,
        "name": "美发 / 美容 / 足疗保健"
    },
    {
        "id": 14,
        "name": "网吧 / KTV / 酒吧休闲娱乐类"
    },

    {
        "id": 15,
        "name": "大中型餐饮"
    },
    {
        "id": 16,
        "name": "大中型连锁超市"
    },
    {
        "id": 17,
        "name": "校园内食堂 / 餐饮"
    },
    {
        "id": 18,
        "name": "校园内超市 / 便利店 / 零售"
    },

    {
        "id": 19,
        "name": "快递"
    },
    {
        "id": 20,
        "name": "彩票"
    },
    {
        "id": 21,
        "name": "交通运输 / 票务旅游"
    },
    {
        "id": 22,
        "name": "教育"
    },
    {
        "id": 23,
        "name": "烟酒零食"
    },

    {
        "id": 24,
        "name": "其他"
    },
]
var yirongmaList = []
var yirongmaIdList = []
for(var i = 0 ; i < shopData.length;i++){
	yirongmaList.push(shopData[i].name)
	yirongmaIdList.push(shopData[i].id)
}
module.exports = {
	yirongma: yirongmaList,
	yirongmaCode: yirongmaIdList,
	yirongmaL:shopData
}