var myChart = echarts.init(document.getElementById('main'));

			// 指定图表的配置项和数据
			var option = {
				legend: {
					top: "10%",
					orient: "vertical",
					left: "right",
					data: ["运行数量", "会话总量"]
				},
				series: [{
					type: "pie",
					data: [{
						value: 30,
						name: "会话总量"

					},{
						value: 12,
						name: "运行数量"
					}],
					stillShowZeroSum: true,
					left: "50%",
					right: "20%",
					label: {
						color: "rgba(255, 255, 255, 255)",
						fontStyle: "normal",
						fontFamily: "sans-serif"
					},
					labelLine: {
						show: false
					},
					avoidLabelOverlap: true,
					legendHoverLink: true,
					animation: true,
					top: "-20%",
					itemStyle: {
						normal:{
                                    color:function(params) {
                                    //自定义颜色
                                    var colorList = ['#455a64','#4caf50'];
                                        return colorList[params.dataIndex]
                                     }
                                }
					}
				}]
			}
			myChart.setOption(option);
			