function drawRainHistory() {
    if (dataFetched == false) {
        cloneToContent("cog");
        $.ajax({
            url: restApiHome + "rain/history",
            dataType: "json",
            success: function (result) {
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
            error: function (xhr, status, error) {
                $("#content").html(error);
            }
        });
        dataFetched = true;
    }
}