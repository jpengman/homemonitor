/**
 * Handles the modification of the Content tag
 */
function drawContent() {
	// Drawing content
	if (content == 'chartByID') {
		showSlider();
		drawChartJS("temperature/chart/byid/" + request + '/' + time
			+ "%20MINUTE");
	} else if (content == 'chartByType') {
		showSlider();
		drawChartJS("temperature/chart/bytype/" + request + "/" + time
			+ "%20MINUTE");
	} else if (content == 'OutsideHistory') {
		hideSlider();
		drawChartJS("minavgmax/" + request);
	} else if (content == 'start') {
		hideSlider();
		drawStartPage();
	} else if (content == 'overview') {
		hideSlider();
		drawOverview();
	} else if (content == 'meterChart') {
		showSlider();
		drawChartJS("meter/chart/byinterval/" + request + "/" + time
			+ "%20MINUTE");
	} else if (content == 'meterYearChart') {
		hideSlider();
		drawChartJS("meter/chart/years/" + request + "/-1");
	} else if (content == 'rainChart') {
		hideSlider();
		drawChartJS("rain/ChartJSConfig/1 MONTH");
	} else if (content == 'rainHistory') {
		hideSlider();
		drawRainHistory();
	} else if (content == 'mowerMap') {
		showSlider(1080);
		drawMap(restApiHome + "mower/coordiantes/Roberta/" + time + "%20MINUTE");
	} else if (content == 'groundwaterChart') {
		hideSlider();
		drawChartJS("groundwater/chart/" + request);
	} else if (content == 'solarPowerChart') {
		hideSlider();
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