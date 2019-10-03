
/**
 * Handles the Chart range slider
 */

function showSlider(type) {
	if (typeof type == 'undefined') {
		minutes = 1440;
	} else if (type == 1080) {
		minutes = type;
	} else if (type == TIME_PERIOD) {
		minutes = null;
	}


	if (minutes != null) {
		document.getElementById("chart_range").min = 15;
		document.getElementById("chart_range").max = minutes;
		document.getElementById("chart_range").step = 15;
		if (chartRangeType != TIME) {
			document.getElementById("chart_range").value = time;
			document.getElementById("range_output").innerHTML = getHoursString(time);
			chartRangeType = TIME
		}
	} else {
		document.getElementById("chart_range").min = 1;
		document.getElementById("chart_range").max = 9;
		document.getElementById("chart_range").step = 1;
		if (chartRangeType != TIME_PERIOD) {
			document.getElementById("chart_range").value = timeperiod;
			document.getElementById("range_output").innerHTML = getTimeperiodType(timeperiod, true)
			chartRangeType = TIME_PERIOD
		}
	}
	document.getElementById("range_output").style.display = 'block';
	document.getElementById("chart_range").style.display = 'block';
}
function hideSlider() {
	document.getElementById("range_output").style.display = 'none';
	document.getElementById("chart_range").style.display = 'none';
}

$('#chart_range').change(function () { drawContentTimer(); });

document.getElementById("chart_range").oninput = function () {
	if (this.min == 15) {
		time = this.value;
		document.getElementById("range_output").innerHTML = getHoursString(time);
	} else {
		timeperiod = this.value;
		document.getElementById("range_output").innerHTML = getTimeperiodType(timeperiod, true)
	}
}
//Hide Slider initially
hideSlider();


