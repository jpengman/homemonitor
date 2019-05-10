/**
 * 
 */
function cloneToTarget(template,target) {
	$("#"+target).html($("#tmp_" + template).clone().attr("id", template));
}
function cloneToContent(template) {
	cloneToTarget(template,"content")
}
function appendTarget(template,target) {
	$("#"+target).append($("#tmp_" + template).clone().attr("id", template));
}
function appendContent(template) {
	appendTarget(template,"content");
}

function appendTable(tableId, html) {
	$("#" + tableId).find('tbody').append(html);
}
function formatPower(power) {
	if (power > 1000000) {
		return parseFloat(power / 1000000).toPrecision(3) + " MW";
	}else if (power > 1000) {
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