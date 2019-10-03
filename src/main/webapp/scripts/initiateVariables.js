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
var timeperiod = "6"; //"MONTH"
var chartRangeType = "";
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
const TIME_PERIOD = "timeperiod";
const TIME = "time";

//location.hash constants
const HASH_START = '#start';
const HASH_STOVE = '#stove';
const HASH_VP = '#vp';
const HASH_VP_USAGE = '#vp_usage';
const HASH_ACC = '#acc';
const HASH_FLOOR = '#floor';
const HASH_OUTSIDE_NOW = '#outside_now';
const HASH_OUTSIDE_DAYS = '#outside_days';
const HASH_OUTSIDE_WEEKS = '#outside_weeks';
const HASH_OUTSIDE_MONTHS = '#outside_months';
const HASH_OUTSIDE_YEARS = '#outside_years';
const HASH_RAIN_CHART = '#rain_acc';
const HASH_SOLAR_POWER = '#solar_power';
const HASH_SOLAR_POWER_YESTERDAY = '#solar_power_yesterday';
const HASH_SOLAR_ENERGY = '#solar_energy';
const HASH_INCOMING_WATER = '#incoming_water';
const HASH_GROUNDWATER_THIS_YEAR = '#groundwater_this_year';
const HASH_GROUNDWATER_SMALL = '#groundwater_small';
const HASH_GROUNDWATER_LARGE = '#groundwater_large';
const HASH_SENSOR_OVERVIEW = '#overview';
const HASH_MOWER_MAP = '#mower_map';

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
const SOLARPOWER_CHART_DATE = "solarPowerChartDate"
const START = 'start';
const METER_CHART = 'meterChart';

