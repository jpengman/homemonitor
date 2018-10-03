/**
 * Handles the modification of the Content tag
 */

function cloneToContent(template) {
	$("#content").html($("#tmp_" + template).clone().attr("id", template));
}
function appendTable(tableId, html) {
	$("#" + tableId).find('tbody').append(html);
}
google.load('visualization', '1', {
	'packages' : [ 'corechart' ]
});
function drawChart(url, options) {
	var contentDiv = $("#content");
	contentDiv.height($(window).height() - 150);
	if (dataFetched == false) {
		cloneToContent("cog");
		$.ajax({
			url : '../OWManager-0.0.1-SNAPSHOT/rest/' + url,
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
function drawChartJS(url) {
	if (dataFetched == false) {
		if (clean == true) {
			cloneToContent("cog");
			$.ajax({
				url : restApiHome +url,
				dataType : "json",
				success : function(result) {
					jsonData = result;
					cloneToContent("ChartJS");
					$("#ChartJS").height($(window).height() - 150);
					myChart = new Chart($("#ChartJS"), jsonData);
				},
				error : function(xhr, status, error) {
					$("#content").html(error);
				}
			});
			dataFetched = true;
		} else {
			
		}
	} else {
		$("#content").height($(window).height() - 150);
	}
}
function drawMap(url) {
	var contentDiv = $("#content");
	var map = new google.maps.Map(document.getElementById('content'), {
		zoom : 18,
		center : {
			lat : 62.937196215,
			lng : 15.088929118
		},
		mapTypeId : 'satellite',
		mapTypeControl : false,
		streetViewControl : false
	});

	$.ajax({
		url : url,
		dataType : "json",
		success : function(result) {
			var flightPlanCoordinates = result;
			var flightPath = new google.maps.Polyline({
				path : flightPlanCoordinates,
				geodesic : true,
				strokeColor : '#FF0000',
				strokeOpacity : 1.0,
				strokeWeight : 2
			});

			flightPath.setMap(map);

		},
		error : function(xhr, status, error) {
			contentDiv.html(error);
		}
	});

	contentDiv.height($(window).height() - 150);
}

function drawTanks() {
	if (dataFetched == false) {
		var contentDiv = $("#content");
		cloneToContent("cog");
		$.ajax({
			url : "../OWManager-0.0.1-SNAPSHOT/rest/svg/heating",
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
		cloneToContent("cog");
		$
				.ajax({
					url : "../rest/api/temperature/sensorlist",
					dataType : "json",
					success : function(result) {
						cloneToContent("overview");
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
											appendTable("overview", '<tr><td>'
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
						$("#content").html(error);
					}
				});
		dataFetched = true;
	}
}

function drawRainHistory() {
	if (dataFetched == false) {
		cloneToContent("cog");
		$.ajax({
			url : '../rest/api/rain/history',
			dataType : "json",
			success : function(result) {
				cloneToContent("rain_history");
				appendTable("rain_history", '<tr><td>I dag</td><td>'
						+ result.today + '</td></tr>');
				appendTable("rain_history", '<tr><td>Senaste dygnet</td><td>'
						+ result.day + '</td></tr>');
				appendTable("rain_history", '<tr><td>Senaste veckan</td><td>'
						+ result.week + '</td></tr>');
				appendTable("rain_history", '<tr><td>Senaste månaden</td><td>'
						+ result.month + '</td></tr>');
			},
			error : function(xhr, status, error) {
				$("#content").html(error);
			}
		});
		dataFetched = true;
	}
}
function drawContent() {
	// Drawing content
	if (content == 'chartByID') {
		drawChartJS(
				"temperature/chart/byid/"
						+ request + '/' + time + "%20MINUTE", options);
		showSlider();
	} else if (content == 'chartByType') {
		drawChartJS("temperature/chart/bytype/"
				+ request + "/" + time + "%20MINUTE");
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
	} else if (content == 'meterChart') {
		drawChart(requestMeter + request + '/' + time, options);
		showSlider();
	} else if (content == 'rainChart') {
		drawChartJS("rain/ChartJSConfig/1 MONTH");
		hideSlider()
	} else if (content == 'rainHistory') {
		drawRainHistory();
		hideSlider()
	} else if (content == 'mowerMap') {
		drawMap(restApiHome+"mower/coordiantes/Roberta/"
				+ time + "%20MINUTE");
		showSlider()
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