/**
 * 
 */
function cloneToTarget(template, target) {
	$("#" + target).html($("#tmp_" + template).clone().attr("id", template));
}
function cloneToContent(template) {
	cloneToTarget(template, "content")
}
function appendTarget(template, target) {
	$("#" + target).append($("#tmp_" + template).clone().attr("id", template));
}
function appendContent(template) {
	appendTarget(template, "content");
}

function appendTable(tableId, html) {
	$("#" + tableId).find('tbody').append(html);
}
function formatPower(power) {
	if (power > 1000000) {
		return parseFloat(power / 1000000).toPrecision(3) + " MW";
	} else if (power > 1000) {
		return parseFloat(power / 1000).toPrecision(3) + " kW";
	} else
		return power + " W";
}
function formatNullable(string) {
	if (typeof string == 'undefined') {
		return "";
	} else
		return string;
}
function formatDate(date) {
	var day = (date.getDate() < 10 ? '0' : '') + date.getDate();
	var month = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
	var hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
	var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
	return date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':'
		+ minutes;
}
function getTimeperiodType(value, desc) {
	if (desc) {
		switch (value) {
			case "1":
				return "I går";
			case "2":
				return "Idag";
			case "3":
				return "Senaste dygnet";
			case "4":
				return "Den här veckan";
			case "5":
				return "Senaste veckan";
			case "6":
				return "Den här månaden";
			case "7":
				return "Senaste månaden";
			case "8":
				return "I år";
			case "9":
				return "Senaste året";
		}
	}
	else {
		switch (value) {
			case "1":
				return "YESTERDAY";
			case "2":
				return "TODAY";
			case "3":
				return "DAY";
			case "4":
				return "THIS_WEEK";
			case "5":
				return "WEEK";
			case "6":
				return "THIS_MONTH";
			case "7":
				return "MONTH";
			case "8":
				return "THIS_YEAR";
			case "9":
				return "YEAR";
		}
	}
}
function getHoursString(timeInMinutes) {
	minutes = timeInMinutes % 60;
	var hours = (timeInMinutes - minutes) / 60;
	var hoursString = "";
	if (hours == 1) {
		hoursString = hours + ' timme';
	} else if (hours > 1) {
		hoursString = hours + ' timmar';
	}
	minutesString = "";
	if (minutes != 0) {
		if (hours > 0) {
			minutesString = " och " + minutes + ' minuter';
		} else {
			minutesString = minutes + ' minuter';
		}
	}

	return hoursString + minutesString;
}