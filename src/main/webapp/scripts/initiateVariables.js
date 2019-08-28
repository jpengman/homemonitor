/**
 * initiates global variables
 */
Chart.defaults.global.elements.point.radius = 1;
var options = {
	chartArea: { width: '100%', height: '100%' },
	legend: { position: 'in' },
	titlePosition: 'in', axisTitlesPosition: 'in',
	hAxis: { textPosition: 'none' },
	vAxis: { textPosition: 'in' }
};
var content = 'tanks';
var contentHeader = '';
var restApiHome = "../rest/api/";
var requestByID = 'data/getdatatable/';
var requestByType = 'data/getdatatablebytype/';
var requestOutsideHistory = 'data/getoutsidehistory/';
var requestMeter = 'data/getmeterdatatable/';
var requestOverview = 'sensors/';
var request = '';
var time = "360";
var timer = null;
var dataFetched = false;
var clean = false;
var jsonData = '';
var myChart = null;
var map = null;
var mowerPath = null;
var mowerPos = null;
var infowindow = new google.maps.InfoWindow({
	content: ""
});

// Routing constants
const CHART_BY_ID = 'chartByID';
const CHART_BY_TYPE = 'chartByType';
const OUTSIDE_HISTORY = 'OutsideHistory';
const OVERVIEW = 'overview';
const METER_YEAR_CHART = 'meterYearChart';
const RAIN_CHART = 'rainChart';
const RAIN_HISTORY = 'rainHistory';
const MOWER_MAP = "mowerMap";
const GROUNDWATER_CHART = "groundwaterChart";
const SOLARPOWER_CHART = "solarPowerChart";
const START = 'start';
const METER_CHART = 'meterChart';

