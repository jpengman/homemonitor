/**
 * Handles the modification of the Content tag
 */
google.load('visualization', '1', {
	'packages' : [ 'corechart' ]
});
function drawChart(url, options) {
	var contentDiv= $("#content");
	contentDiv.height($(window).height() - 150);
	if (dataFetched == false) {
		contentDiv.html($("#tmp_cog").clone().attr("id","cog"));
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
				var chart = new google.visualization.LineChart( document.getElementById("content"));
				chart.draw(data, options);
			},
			error : function(xhr,status,error) {
				contentDiv.html(error);
				}
		});
		dataFetched = true;
	}else{
		var data = new google.visualization.DataTable(jsonData);
		var chart = new google.visualization.LineChart( document.getElementById("content"));
	}
	
}

function drawTanks() {
	if (dataFetched == false) {
		var contentDiv= $("#content");
		contentDiv.html($("#tmp_cog").clone().attr("id","cog"));
		$.ajax({
		url : baseurl + "svg/heating",
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic d2ViOkhlbWxpZzEyMyE=");
		},
		success : function(result) {
			contentDiv.html(result);
		},
		error : function(xhr,status,error) {
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
	} else if (content == 'MinMaxAvg') {
		drawChart(requestMinMaxAvg + request + '/14', options);
		hideSlider();
	} else if (content == 'tanks') {
		drawTanks();
		hideSlider();
	}
	// Enable/disable Timer
	clearInterval(timer);
	if (content != 'MinMaxAvg') {
			timer = setInterval(drawContentTimer, 60000);
	}
	// Set Content Header
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