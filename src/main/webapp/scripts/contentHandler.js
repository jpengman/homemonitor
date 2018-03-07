/**
 * Handles the modification of the Content tag
 */
google.load('visualization', '1', {
	'packages' : [ 'corechart' ]
});
function drawChart(url, targetDivId, options) {
	var chartDiv = document.getElementById(targetDivId);
	$("#content").height($(window).height() - 150);
	if (dataFetched == false) {
		jsonData = $.ajax({
			url : baseurl + url,
			dataType : "json",
			async : false,
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization",
						"Basic d2ViOkhlbWxpZzEyMyE=");
			}
		}).responseText;
		dataFetched = true;
	}
	var data = new google.visualization.DataTable(jsonData);
	var chart = new google.visualization.LineChart(chartDiv);
	chart.draw(data, options);
}

function drawTanks() {
	var accsvg = $
			.ajax({
				url : baseurl + "svg/heating",
				dataType : "svg",
				async : false,
				beforeSend : function(xhr) {
					xhr.setRequestHeader("Authorization",
							"Basic d2ViOkhlbWxpZzEyMyE=");
				}
			}).responseText;
	document.getElementById('content').innerHTML = accsvg;
}
function drawContent() {
	if (content == 'chartByID') {
		drawChart(requestByID + request + '/' + time, 'content', options);
		showSlider();
	} else if (content == 'chartByType') {
		drawChart(requestByType + request + '/' + time, 'content', options);
		showSlider();
	} else if (content == 'MinMaxAvg') {
		drawChart(requestMinMaxAvg + request + '/14', 'content', options);
		hideSlider();
	} else if (content == 'tanks') {
		drawTanks();
		hideSlider();
	}
	document.getElementById('content_header').innerHTML = contentHeader;
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
timer = setInterval(drawContentTimer, 60000);