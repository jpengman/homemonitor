/**
 * Handles the Chart range slider
 */
function showSlider(){
	document.getElementById("range_output").style.display = 'block';
	document.getElementById("chart_range").style.display = 'block';	
}
function hideSlider(){
	document.getElementById("range_output").style.display = 'none';
	document.getElementById("chart_range").style.display = 'none';	
}
$('#chart_range').change(function () {time = document.getElementById('chart_range').value; drawContent(); });
document.getElementById("chart_range").oninput = function() {
	time = this.value
	var hours = this.value/60;
	var hoursString=' Timmar';
	if(hours==1){hoursString= ' Timme';}
	document.getElementById("range_output").innerHTML = hours+hoursString;
}