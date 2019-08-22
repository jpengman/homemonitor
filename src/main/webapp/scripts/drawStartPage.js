function drawStartPage() {
    if (dataFetched == false) {
        var contentDiv = $("#content");
        cloneToContent("cog");
        $
            .ajax({
                url: "../OWManager-0.0.1-SNAPSHOT/rest/svg/heating",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization",
                        "Basic d2ViOkhlbWxpZzEyMyE=");
                },
                error: function (xhr, status, error) {
                    contentDiv.html(error);
                },
                success: function (result) {
                    cloneToContent("start");
                    $("#start_left").html(result);
                    appendTarget("solarinfo", "start_right");
                    const date = new Date();
                    $("#month_col").html(date.toLocaleString('sv-SE', {
                        month: 'long'
                    }))
                    $
                        .get(
                            "../rest/api/solar/overview",
                            function (result) {
                                appendTable(
                                    "solarinfo",
                                    "<tr><td>"
                                    + formatPower(result.currentPower.power)
                                    + "</td><td>"
                                    + formatPower(result.lastDayData.maxPower)
                                    + "</td><td>"
                                    + formatNullable(result.lastDayData.productionStart)
                                    + "</td><td>"
                                    + formatNullable(result.lastDayData.productionEnd)
                                    + "</td><td>"
                                    + formatPower(result.lastDayData.energy)
                                    + "/h</td><td>"
                                    + formatPower(result.lastMonthData.energy)
                                    + "/h</td></tr>");

                                $("#sunUp").html(result.sunriseSunset.sunrise);
                                $("#sunDown").html(result.sunriseSunset.sunset);
                            });
                    $.get(restApiHome + "rain/history", function (result) {
                        appendTarget("rain_history", "start_right");
                        appendTable("rain_history", '<td>'
                            + result.today + '</td>');
                        appendTable("rain_history", '<td>' + result.day
                            + '</td>');
                        appendTable("rain_history", '<td>' + result.week
                            + '</td>');
                        appendTable("rain_history", '<td>' + result.month
                            + '</td>');
                    });
                }
            });
        dataFetched = true;
    }
}