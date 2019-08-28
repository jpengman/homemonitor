
/**
 * Handles the modification of the Content tag
 */
const NEED_SLIDER = [CHART_BY_ID, CHART_BY_TYPE, METER_CHART];
function drawContent() {
	// Drawing content
	if (NEED_SLIDER.includes(content)) {
		showSlider();
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
			drawChartJS("meter/chart/byinterval/" + request + "/1%20MONTH");
			break;
		case METER_YEAR_CHART:
			drawChartJS("meter/chart/years/" + request + "/-1");
			break
		case RAIN_CHART:
			drawChartJS("rain/ChartJSConfig/1 MONTH");
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
			drawChartJS("solar/chart/today");
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

function drawContentTimer() {
	dataFetched = false;
	drawContent();
}
$(window).on('resize', drawContent);