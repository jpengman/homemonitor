function drawChartJS(url) {
	if (dataFetched == false) {
		if (clean == true) {
			cloneToContent("cog");
			$
				.ajax({
					url: restApiHome + url,
					dataType: "json",
					success: function (result) {
						cloneToContent("ChartJS");
						if (document.getElementById("chart_range").style.display == "block") {
							$("#ChartJS").height($(window).height() - 150);
						} else {
							$("#ChartJS").height($(window).height() - 80);
						}
						myChart = new Chart($("#ChartJS"), result);
					},
					error: function (xhr, status, error) {
						$("#content").html(error);
					}
				});
			dataFetched = true;
		} else {
			$.ajax({
				url: restApiHome + url,
				dataType: "json",
				success: function (result) {
					$("#ChartJS").height($(window).height() - 150);
					Chart.helpers.each(Chart.instances, function (instance) {
						instance.config.data.datasets = result.data.datasets;
						instance.update();
					})
				},
				error: function (xhr, status, error) {
					$("#content").html(error);
				}
			});
			dataFetched = true;
		}
	} else {
		if (document.getElementById("chart_range").style.display == "block") {
			$("#ChartJS").height($(window).height() - 150);
		} else {
			$("#ChartJS").height($(window).height() - 80);
		}
	}
}