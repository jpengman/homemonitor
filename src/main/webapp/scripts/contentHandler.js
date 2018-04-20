/**
 * Handles the modification of the Content tag
 */
google.load('visualization', '1', {
	'packages' : [ 'corechart' ]
});
function drawChart(url, options) {
	var contentDiv = $("#content");
	contentDiv.height($(window).height() - 150);
	if (dataFetched == false) {
		contentDiv.html($("#tmp_cog").clone().attr("id", "cog"));
		$.ajax({
			url : baseurl + url,
			dataType : "json",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization",
						"Basic d2ViOkhlbWxpZzEyMyE=");
			},
			success : function(result) {
				jsonData = result;
				var data = new google.visualization.DataTable(jsonData);
				var chart = new google.visualization.LineChart(document
						.getElementById("content"));
				chart.draw(data, options);
			},
			error : function(xhr, status, error) {
				contentDiv.html(error);
			}
		});
		dataFetched = true;
	} else {
		var data = new google.visualization.DataTable(jsonData);
		var chart = new google.visualization.LineChart(document
				.getElementById("content"));
	}

}

function drawTanks() {
	if (dataFetched == false) {
		var contentDiv = $("#content");
		contentDiv.html($("#tmp_cog").clone().attr("id", "cog"));
		$.ajax({
			url : baseurl + "svg/heating",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization",
						"Basic d2ViOkhlbWxpZzEyMyE=");
			},
			success : function(result) {
				contentDiv.html(result);
			},
			error : function(xhr, status, error) {
				contentDiv.html(error);
			}
		});
		dataFetched = true;
	}
}
function formatDate(date) {
	var day = (date.getDate() < 10 ? '0' : '') + date.getDate();
	var month = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
	var hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
	var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
	return date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':'
			+ minutes;
}
function drawOverview() {
	if (dataFetched == false) {
		var contentDiv = $("#content");
		contentDiv.html($("#tmp_cog").clone().attr("id", "cog"));
		$
				.ajax({
					url : baseurl + requestOverview,
					dataType : "json",
					beforeSend : function(xhr) {
						xhr.setRequestHeader("Authorization",
								"Basic d2ViOkhlbWxpZzEyMyE=");
					},
					success : function(result) {
						contentDiv.html($("#tmp_overview").clone().attr("id",
								"overview"));
						result
								.sort(function(a, b) {
									if (a.sensorType.sensorTypeId == b.sensorType.sensorTypeId) {
										return a.name.localeCompare(b.name);
									} else {
										return a.sensorType.sensorTypeId
												- b.sensorType.sensorTypeId
									}

								})
						var currentSensorType = null;
						$
								.each(
										result,
										function(i, sensor) {
											var sensorTemperature = Number(sensor.lastLoggedTemp)
													+ Number(sensor.offset)
											$("#overview")
													.find('tbody')
													.append(
															'<tr><td>'
																	+ sensor.name
																	+ '</td><td>'
																	+ sensorTemperature
																	+ '</td><td>'
																	+ formatDate(new Date(
																			sensor.lastLogged))
																	+ '</td></tr>');
										});

					},
					error : function(xhr, status, error) {
						contentDiv.html(error);
					}
				});
		dataFetched = true;
	}
}

function drawContent() {
	// Drawing content
	if (content == 'chartByID') {
		drawChart(requestByID + request + '/' + time, options);
		showSlider();
	} else if (content == 'chartByType') {
		drawChart(requestByType + request + '/' + time, options);
		showSlider();
	} else if (content == 'OutsideHistory') {
		drawChart(requestOutsideHistory + request + '/', options);
		hideSlider();
	} else if (content == 'tanks') {
		drawTanks();
		hideSlider();
	} else if (content == 'overview') {
		drawOverview();
		hideSlider();
	}

	// Enable/disable Timer
	clearInterval(timer);
	if (content != 'OutsideHistory') {
		timer = setInterval(drawContentTimer, 60000);
	}

	// Set Content Header
	if (contentHeader != null) {
		$("#content_header").html(contentHeader);
		$("#content_header").show();
	} else {
		$("#content_header").hide();
	}

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