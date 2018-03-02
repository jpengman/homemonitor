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
var baseurl='../OWManager-0.0.1-SNAPSHOT/rest/data/';
var requestByID = 'getdatatable/';
var requestByType = 'getdatatablebytype/';
var request='';
var time="360";
var timer = setInterval(drawContent,60000);