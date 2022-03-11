import Mock from 'mockjs'

let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0;i<7;i++){
            List.push(
                Mock.mock({
                    苹果1:Mock.Random.float(100,8000,0,0),
                    苹果2:Mock.Random.float(100,8000,0,0),
                    苹果3:Mock.Random.float(100,8000,0,0),
                    苹果4:Mock.Random.float(100,8000,0,0),
                    苹果5:Mock.Random.float(100,8000,0,0),
                    苹果6:Mock.Random.float(100,8000,0,0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                //饼图
                videoData: [
                    {
                        name: '小米1',
                        value:4324
                    },
                    {
                        name: '小米2',
                        value:435
                    },
                    {
                        name: '小米3',
                        value:543
                    },
                    {
                        name: '小米4',
                        value:654
                    },
                    {
                        name: '小米5',
                        value:453
                    },
                    {
                        name: '小米6',
                        value:654
                    },
                ],
                //柱状图
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周三',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周四',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周五',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周六',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周日',
                        new: 5,
                        active: 200
                    },
                ],
                // 折线图
                orderData: {
                    date: ['20191001','20191002','20191003','20191004','20191005','20191006','20191007'],
                    data: List
                },

                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22200
                    },
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22200
                    },
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22200
                    },
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22200
                    },
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22200
                    },
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22200
                    },
                ]
            }
        }
    }
}