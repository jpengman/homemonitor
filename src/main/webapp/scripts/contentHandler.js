
/**
 * Handles the modification of the Content tag
 */
const TIME_SLIDER = [CHART_BY_ID, CHART_BY_TYPE];
const TIMEPERIOD_SLIDER = [METER_CHART, RAIN_CHART, SOLARPOWER_CHART];
function drawContent() {
	// Drawing content
	if (TIME_SLIDER.includes(content)) {
		showSlider();
	} else if (TIMEPERIOD_SLIDER.includes(content)) {
		showSlider(TIME_PERIOD);
	} else {
		hideSlider();
	}
	switch (content) {
		case CHART_BY_ID:
			drawChartJS("temperature/chart/byid/" + request + '/' + time
				+ "%20MINUTE");
			break;
		case CHART_BY_TYPE:
			drawChartJS("temperature/chart/bytype/" + request + "/" + time
				+ "%20MINUTE");
			break;
		case OUTSIDE_HISTORY:
			drawChartJS("minavgmax/" + request);
			break;
		case START:
			drawStartPage();
		case OVERVIEW:
			drawOverview();
			break;
		case METER_CHART:
			var tp = getTimeperiodType(timeperiod, false);
			url = "meter/barchart/bytimeperiodtype/" + request + "/" + tp;
			drawChartJS(url);
			break;
		case METER_YEAR_CHART:
			drawChartJS("meter/chart/years/" + request + "/-1");
			break
		case RAIN_CHART:
			var tp = getTimeperiodType(timeperiod, false);
			drawChartJS("rain/ChartJSConfig/bytimeperiodType/" + tp);
			break;
		case RAIN_HISTORY:
			drawRainHistory();
			break;
		case MOWER_MAP:
			showSlider(1080);
			drawMap(restApiHome + "mower/coordiantes/Roberta/" + time + "%20MINUTE");
			break;
		case GROUNDWATER_CHART:
			drawChartJS("groundwater/chart/" + request);
			break;
		case SOLARPOWER_CHART:
			var tp = getTimeperiodType(timeperiod, false);
			drawChartJS("solar/chart/timeperiodtype/" + request);
			break;
		case SOLARPOWER_CHART_DATE:

			drawChartJS("solar/chart/date" + getDatefromDateObject(request));
	}


	// Enable/disable Timer
	clearInterval(timer);
	if (content != 'OutsideHistory' && content != 'groundwaterChart'
		&& content != 'meterYearChart') {
		timer = setInterval(drawContentTimer, 60000);
	}

	// Set Content Header
	if (contentHeader != null) {
		$("#content_header").html(contentHeader);
		$("#content_header").show();
	} else {
		$("#content_header").hide();
	}
	clean = false;

}
function drawContentWith(contentIn, contentHeaderIn, requestIn) {
	content = contentIn;
	contentHeader = contentHeaderIn;
	request = requestIn;
	dataFetched = false;
	drawContent();
}
function getDatefromDateObject(date, modifier) {
	var modified = new Date(date);
	modified.setDate(modified.getDate() + modifier);
	var month = modified.getMonth() + 1;
	return modified.getFullYear() + "-" + month + "-" + modified.getDate();
}
function getDatefromDateObject(date) {
	return getDatefromDateObject(date, 0);
}

function drawContentTimer() {
	dataFetched = false;
	drawContent();
}
$(window).on('resize', drawContent);