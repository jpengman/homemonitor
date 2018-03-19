/**
 * initiates global variables
 */
var options = {
		chartArea: {width: '100%', height: '100%'},
		legend: {position: 'in'},
		titlePosition: 'in', axisTitlesPosition: 'in',
		hAxis: {textPosition: 'none'}, 
		vAxis: {textPosition: 'in'}
	};
var content='tanks';
var contentHeader='';
var baseurl='../OWManager-0.0.1-SNAPSHOT/rest/';
var requestByID = 'data/getdatatable/';
var requestByType = 'data/getdatatablebytype/';
var requestOutsideHistory = 'data/getoutsidehistory/';
var requestOverview = 'sensors/';
var request='';
var time="360";
var timer = null;
var dataFetched= false;
var jsonData = '';
