/*
Template Name: HUD - Responsive Bootstrap 5 Admin Template
Version: 1.9.0
Author: Sean Ngu
Website: http://www.seantheme.com/hud/
*/

var randomNo = function() {
	return Math.floor(Math.random() * 60) + 30
  };
  
  var handleRenderChart = function() {
	  // global apexchart settings
	  Apex = {
		  title: {
			  style: {
				  fontSize:  '14px',
				  fontWeight:  'bold',
				  fontFamily:  app.font.family,
				  color:  app.color.white
			  },
		  },
		  legend: {
			  fontFamily: app.font.family,
			  labels: {
				  colors: '#fff'
			  }
		  },
		  tooltip: {
			  style: {
		  fontSize: '12px',
		  fontFamily: app.font.family
		}
		  },
		  grid: {
			  borderColor: 'rgba('+ app.color.whiteRgb + ', .25)',
		  },
		  dataLabels: {
			  style: {
				  fontSize: '12px',
				  fontFamily: app.font.family,
				  fontWeight: 'bold',
				  colors: undefined
			}
		  },
		  xaxis: {
			  axisBorder: {
				  show: true,
				  color: 'rgba('+ app.color.whiteRgb + ', .25)',
				  height: 1,
				  width: '100%',
				  offsetX: 0,
				  offsetY: -1
			  },
			  axisTicks: {
				  show: true,
				  borderType: 'solid',
				  color: 'rgba('+ app.color.whiteRgb + ', .25)',
				  height: 6,
				  offsetX: 0,
				  offsetY: 0
			  },
		labels: {
				  style: {
					  colors: '#fff',
					  fontSize: '12px',
					  fontFamily: app.font.family,
					  fontWeight: 400,
					  cssClass: 'apexcharts-xaxis-label',
				  }
			  }
		  },
		  yaxis: {
		labels: {
				  style: {
					  colors: '#fff',
					  fontSize: '12px',
					  fontFamily: app.font.family,
					  fontWeight: 400,
					  cssClass: 'apexcharts-xaxis-label',
				  }
			  }
		  }
	  };
	
	
	// small stat chart
	  var x = 0;
	  var chart = [];
	  
	  var elmList = [].slice.call(document.querySelectorAll('[data-render="apexchart"]'));
	  elmList.map(function(elm) {
		  var chartType = elm.getAttribute('data-type');
		  var chartHeight = elm.getAttribute('data-height');
		  var chartTitle = elm.getAttribute('data-title');
		  var chartColors = [];
		  var chartPlotOptions = {};
		  var chartData = [];
		  var chartStroke = {
			  show: false
		  };
		  if (chartType == 'bar') {
			  chartColors = [app.color.theme];
			  chartPlotOptions = {
				  bar: {
					  horizontal: false,
					  columnWidth: '65%',
					  endingShape: 'rounded'
				  }
			  };
			  chartData = [{
				  name: chartTitle,
				  data: [randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo()]
			  }];
		  } else if (chartType == 'pie') {
			  chartColors = ['rgba('+ app.color.themeRgb + ', 1)', 'rgba('+ app.color.themeRgb + ', .75)', 'rgba('+ app.color.themeRgb + ', .5)'];
			  chartData = [randomNo(), randomNo(), randomNo()];
		  } else if (chartType == 'donut') {
			  chartColors = ['rgba('+ app.color.themeRgb + ', .15)', 'rgba('+ app.color.themeRgb + ', .35)', 'rgba('+ app.color.themeRgb + ', .55)', 'rgba('+ app.color.themeRgb + ', .75)', 'rgba('+ app.color.themeRgb + ', .95)'];
			  chartData = [randomNo(), randomNo(), randomNo(), randomNo(), randomNo()];
			  chartStroke = {
				  show: false,
				  curve: 'smooth',
				  lineCap: 'butt',
				  colors: 'rgba(' + app.color.blackRgb + ', .25)',
				  width: 2,
				  dashArray: 0,    
			  };
			  chartPlotOptions = {
				  pie: {
					  donut: {
						  background: 'transparent',
					  }
				  }
			  };
		  } else if (chartType == 'line') {
			  chartColors = [app.color.theme];
			  chartData = [{
				  name: chartTitle,
				  data: [randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo()]
			  }];
			  chartStroke = {
				  curve: 'straight',
				  width: 2
			  };
		  }
	  
		  var chartOptions = {
			  chart: {
				  height: chartHeight,
				  type: chartType,
				  toolbar: {
					  show: false
				  },
				  sparkline: {
					  enabled: true
				  },
			  },
			  dataLabels: {
				  enabled: false
			  },
			  colors: chartColors,
			  stroke: chartStroke,
			  plotOptions: chartPlotOptions,
			  series: chartData,
			  grid: {
				  show: false
			  },
			  tooltip: {
				  theme: 'dark',
				  x: {
					  show: false
				  },
				  y: {
					  title: {
						  formatter: function (seriesName) {
							  return ''
						  }
					  },
					  formatter: (value) => { return ''+ value },
				  }
			  },
			  xaxis: {
				  labels: {
					  show: false
				  }
			  },
			  yaxis: {
				  labels: {
					  show: false
				  }
			  }
		  };
		  chart[x] = new ApexCharts(elm, chartOptions);
		  chart[x].render();
		  x++;
	  });
	
	var serverChartOptions = {
	  chart: {
		height: '100%',
		type: 'bar',
		toolbar: {
		  show: false
		}
	  },
	  plotOptions: {
		bar: {
		  horizontal: false,
		  columnWidth: '55%',
		  endingShape: 'rounded'  
		},
	  },
	  dataLabels: {
		enabled: false
	  },
	  grid: {
		  show: true,
		  borderColor: 'rgba('+ app.color.whiteRgb +', .15)',
	  },
	  stroke: {
		show: false
	  },
	  colors: ['rgba('+ app.color.whiteRgb + ', .25)', app.color.theme],
	  series: [{
		  name: 'MEMORY USAGE',
		data: [
			randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(),
			randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo()
		]
	  },{
		  name: 'CPU USAGE',
		data: [
			randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(),
			randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo(), randomNo()
		]
	  }],
	  xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		labels: {
				  show: false
			  }
	  },
	  fill: {
		opacity: .65
	  },
	  tooltip: {
		y: {
		  formatter: function (val) {
			return "$ " + val + " thousands"
		  }
		}
	  }
	};
	var apexServerChart = new ApexCharts(
	  document.querySelector('#chart-server'),
	  serverChartOptions
	);
	apexServerChart.render();
  };
  
  var handleRenderMap = function() {
	 var gdpData = { "AF": 16.63, "AL": 11.58, "DZ": 158.97, "AO": 85.81, "AG": 1.1, "AR": 351.02, "AM": 8.83, "AU": 1219.72, "AT": 366.26, "AZ": 52.17, "BS": 7.54, "BH": 21.73, "BD": 105.4, "BB": 3.96, "BY": 52.89, "BE": 461.33, "BZ": 1.43, "BJ": 6.49, "BT": 1.4, "BO": 19.18, "BA": 16.2, "BW": 12.5, "BR": 2023.53, "BN": 11.96, "BG": 44.84, "BF": 8.67, "BI": 1.47, "KH": 11.36, "CM": 21.88, "CA": 1563.66, "CV": 1.57, "CF": 2.11, "TD": 7.59, "CL": 199.18, "CN": 5745.13, "CO": 283.11, "KM": 0.56, "CD": 12.6, "CG": 11.88, "CR": 35.02, "CI": 22.38, "HR": 59.92, "CY": 22.75, "CZ": 195.23, "DK": 304.56, "DJ": 1.14, "DM": 0.38, "DO": 50.87, "EC": 61.49, "EG": 216.83, "SV": 21.8, "GQ": 14.55, "ER": 2.25, "EE": 19.22, "ET": 30.94, "FJ": 3.15, "FI": 231.98, "FR": 2555.44, "GA": 12.56, "GM": 1.04, "GE": 11.23, "DE": 3305.9, "GH": 18.06, "GR": 305.01, "GD": 0.65, "GT": 40.77, "GN": 4.34, "GW": 0.83, "GY": 2.2, "HT": 6.5, "HN": 15.34, "HK": 226.49, "HU": 132.28, "IS": 12.77, "IN": 1430.02, "ID": 695.06, "IR": 337.9, "IQ": 84.14, "IE": 204.14, "IL": 201.25, "IT": 2036.69, "JM": 13.74, "JP": 5390.9, "JO": 27.13, "KZ": 129.76, "KE": 32.42, "KI": 0.15, "KR": 986.26, "UNDEFINED": 5.73, "KW": 117.32, "KG": 4.44, "LA": 6.34, "LV": 23.39, "LB": 39.15, "LS": 1.8, "LR": 0.98, "LY": 77.91, "LT": 35.73, "LU": 52.43, "MK": 9.58, "MG": 8.33, "MW": 5.04, "MY": 218.95, "MV": 1.43, "ML": 9.08, "MT": 7.8, "MR": 3.49, "MU": 9.43, "MX": 1004.04, "MD": 5.36, "MN": 5.81, "ME": 3.88, "MA": 91.7, "MZ": 10.21, "MM": 35.65, "NA": 11.45, "NP": 15.11, "NL": 770.31, "NZ": 138, "NI": 6.38, "NE": 5.6, "NG": 206.66, "NO": 413.51, "OM": 53.78, "PK": 174.79, "PA": 27.2, "PG": 8.81, "PY": 17.17, "PE": 153.55, "PH": 189.06, "PL": 438.88, "PT": 223.7, "QA": 126.52, "RO": 158.39, "RU": 1476.91, "RW": 5.69, "WS": 0.55, "ST": 0.19, "SA": 434.44, "SN": 12.66, "RS": 38.92, "SC": 0.92, "SL": 1.9, "SG": 217.38, "SK": 86.26, "SI": 46.44, "SB": 0.67, "ZA": 354.41, "ES": 1374.78, "LK": 48.24, "KN": 0.56, "LC": 1, "VC": 0.58, "SD": 65.93, "SR": 3.3, "SZ": 3.17, "SE": 444.59, "CH": 522.44, "SY": 59.63, "TW": 426.98, "TJ": 5.58, "TZ": 22.43, "TH": 312.61, "TL": 0.62, "TG": 3.07, "TO": 0.3, "TT": 21.2, "TN": 43.86, "TR": 729.05, "TM": 0, "UG": 17.12, "UA": 136.56, "AE": 239.65, "GB": 2258.57, "US": 14624.18, "UY": 40.71, "UZ": 37.72, "VU": 0.72, "VE": 285.21, "VN": 101.99, "YE": 30.02, "ZM": 15.69, "ZW": 5.57};
	  //var gdpData = {"TH": 312.61};
	  $('#thmap').vectorMap({
		  map: 'th_mill',
		  markersSelectable: true,
		  markersSelectableOne: true,	 
		  normalizeFunction: 'polynomial',
		  hoverOpacity: 0.5,
		  hoverColor: false,
		  zoomOnScroll: false, 
		  zoomButtons: false,
		  selectedMarkers: [0,2,1,2,2,2,3,2,4,2,5,2],
		  series: {
			regions: [{
			  values: gdpData,
			  scale: [app.color.gray300, app.color.gray800],
			  normalizeFunction: 'polynomial'
			}],
			markers: [{
			  attribute: 'fill',
			  scale: [app.color.gray300, app.color.gray800],
			  normalizeFunction: 'polynomial',
			  values: [80, 40, 30, 20, 10],
			  legend: {
				vertical: true,
				title: 'แผนที่ Monitor Data Room',
				labelRender: function(v){
				var text = v - 9;
				  text = (text < 10) ? '< 10' :v + ' - ' + text;
				return text;
				}
			  }
			}]
		  },
		  focusOn: {
			x: 0.5,
			y: 0.5,
			scale: 1
		  },
		  onRegionTipShow: function(e, el, code){
			el.html(el.html()+' (ข้อมูลระบบ - '+gdpData[code]+')');
		  },
		  /*
		  	var vectorMapWorldMarkersColors = getChartColorsArray("world-map-line-markers");
			var worldemapmarkers = new jsVectorMap({
				map: 'world_merc',
				selector: '#world-map-markers',
				zoomOnScroll: false,
				zoomButtons: false,
				selectedMarkers: [0, 2],
				regionStyle: {
					initial: {
						stroke: "#9599ad",
						strokeWidth: 0.25,
						fill: vectorMapWorldMarkersColors,
						fillOpacity: 1,
					},
				},
				markersSelectable: true,
				markers:[
				{ name: "Palestine", coords: [31.9474,35.2272] },
				{ name: "Russia", coords: [61.524,105.3188] },
				{ name: "Canada", coords: [56.1304,-106.3468] },
				{ name: "Greenland", coords: [71.7069,-42.6043] },
				],
				markerStyle:{
				initial: { fill: "#038edc" },
				selected: { fill: "red" }
				},
				labels: {
					markers: {
						render: function(marker){
							return marker.name
						}
					}
				}
})
		 
		  */
		  markerStyle: {
			initial: {
			  fill: '#35373e',//app.color.theme,  // สี จุด Marker
			  stroke: 'none', 
			  "stroke-width": 1,  
			}
		  },
		  regionLabelStyle: {
			initial: {
			  fill: '#35373e',
			  fontFamily: 'Poppins',
			  fontWeight: 500,
			  fontSize: 13,
			},
			// Same properties in initial object can be overwritten in hover and selected states.
			hover: {},
			selected: {},
			selectedHover: {}
		  },
		  regionsSelectable: true,
		  regionsSelectableOne: true,		
		  backgroundColor: 'transparent',
		  //
		  // https://www.latlong.net/place/bangkok-thailand-778.html
		  // https://github.com/themustafaomar/jsvectormap
		  // https://jvm-docs.vercel.app/
		  // https://themesbrand.com/velzon/docs/html/index.html
		  // https://github.com/ThinkGeo/VectorMap-js
		  markers: [		   
		    {latLng: [19.902668, 99.859621], name: 'Chiang Rai',style: { fill: 'red' }},    
			{latLng: [19.019020, 98.823645], name: 'Chiang Mai',style: { fill: 'red' }},
			{latLng: [13.757201, 100.350297], name: 'Bangkok',style: { fill: 'red' }},
			{latLng: [16.090269, 102.054453], name: 'Khon Kaen',style: { fill: 'red' }},
			{latLng: [13.360508,101.037567], name: 'Chon Buri',style: { fill: 'red' }},	
		  ],
		  lines: [{
				  from: "Chiang Rai",
				  to: "Bangkok"
			  },
			  {
				  from: "Chiang Mai",
				  to: "Bangkok"
			  },
			  {
				  from: "Khon Kaen",
				  to: "Bangkok"
			  },
			  {
				from: "Chon Buri",
				to: "Bangkok"
			}, 
		  ],
		  regionStyle: {
			selected: { fill: 'yellow' },
			selectedHover: { fill: 'purple' },
			  initial: {
				fillOpacity: 1,
				strokeWidth: 0.25,
				fontFamily: 'Poppins',
				fontWeight: 500,
				fontSize: 13,
				fill: app.color.white,
				"fill-opacity": 0.35,
				stroke: "none",
				"stroke-width": 1.4,
				"stroke-opacity": 1
			},
			  hover: {
				fill: 'yellow',
				"fill-opacity": 0.5
			}
		  }, 
		  lineStyle: {
				stroke: "#676767",
				strokeWidth: 1.5,
				fill: '#ff5566',
				fillOpacity: 1,
				strokeDasharray: [6, 2, 6], //'6 3 6', // OR: [6, 2, 6]
				animation: true // Enables animation
		  },
		});
  }
  
  /* Controller
  ------------------------------------------------ */
  $(document).ready(function() {
	  handleRenderChart();
	  handleRenderMap();
	  
	  document.addEventListener('theme-reload', function() {
		  $('[data-render="apexchart"], #chart-server, #thmap').empty();
		  handleRenderChart();
		  handleRenderMap();
	  });
  });