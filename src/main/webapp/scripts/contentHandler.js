/**
 * Handles the modification of the Content tag
 */
 google.load('visualization', '1', {'packages':['corechart']});
 function drawChart(url,targetDivId,options) {
		var chartDiv = document.getElementById(targetDivId);
		var jsonData = $.ajax({
      	 	 	url: url,
     	   		dataType:"json",
    	    	async: false,
    	    	beforeSend: function (xhr) {
    	    	    xhr.setRequestHeader ("Authorization", "Basic " + btoa("jpengman:Anviken1979"));
    	    	}
          		}).responseText;
    		var data = new google.visualization.DataTable(jsonData);
    		var chart = new google.visualization.LineChart(chartDiv);	
    		chart.draw(data, options);
    }
 
 function drawTanks() {			
	var accsvg = $.ajax({
	 	url: "../OWManager-0.0.1-SNAPSHOT/rest/svg/heating",
		dataType:"svg",
		async: false,
		beforeSend: function (xhr) {
    	    xhr.setRequestHeader ("Authorization", "Basic " + btoa("jpengman:Anviken1979"));
    	}
		}).responseText;
	document.getElementById('content').innerHTML = accsvg;
}
function drawContent(){
	if(content=='chartByID'){
		drawChart(baseurl+requestByID+request+'/'+time,'content',options);
		showSlider(); 
	}
	else if(content=='chartByType'){
		drawChart(baseurl+requestByType+request+'/'+time,'content',options);
		showSlider(); 
	}else if(content=='MinMaxAvg'){
		drawChart(baseurl+requestMinMaxAvg+request+'/14','content',options);
		hideSlider();
	}
	else {	 
		drawTanks();
		 hideSlider();
		}		
}
