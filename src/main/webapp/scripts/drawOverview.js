function drawOverview() {
    if (dataFetched == false) {
        cloneToContent("cog");
        $
            .ajax({
                url: "../rest/api/temperature/sensorlist",
                dataType: "json",
                success: function (result) {
                    cloneToContent("overview");
                    result
                        .sort(function (a, b) {
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
                            function (i, sensor) {
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
                error: function (xhr, status, error) {
                    $("#content").html(error);
                }
            });
        dataFetched = true;
    }
}
