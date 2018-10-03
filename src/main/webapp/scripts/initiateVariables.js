/**
 * initiates global variables
 */
Chart.defaults.global.elements.point.radius = 1;
var options = {
		chartArea: {width: '100%', height: '100%'},
		legend: {position: 'in'},
		titlePosition: 'in', axisTitlesPosition: 'in',
		hAxis: {textPosition: 'none'}, 
		vAxis: {textPosition: 'in'}
	};
var content='tanks';
var contentHeader='';
var restApiHome="../rest/api/";
var requestByID = 'data/getdatatable/';
var requestByType = 'data/getdatatablebytype/';
var requestOutsideHistory = 'data/getoutsidehistory/';
var requestMeter = 'data/getmeterdatatable/';
var requestOverview = 'sensors/';
var request='';
var time="360";
var timer = null;
var dataFetched= false;
var clean=false;
var jsonData = '';
