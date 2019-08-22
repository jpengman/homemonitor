function drawMap(url) {
    var contentDiv = $("#content");
    if (clean == true) {
        map = new google.maps.Map(document.getElementById('content'), {

            zoom: 18,
            center: {
                lat: 62.937196215,
                lng: 15.088929118
            },
            mapTypeId: 'satellite',
            mapTypeControl: false,
            streetViewControl: false
        });
    }
    $.ajax({
        url: url,
        dataType: "json",
        success: function (result) {
            var mowerCoordinates = result;
            if (mowerPath != null) {
                mowerPath.setMap(null);
            }
            mowerPath = new google.maps.Polyline({
                path: mowerCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
            mowerPath.setMap(map);
            if (mowerPos != null) {
                mowerPos.setMap(null);
            }
            mowerPos = new google.maps.Marker({
                position: result[0],
                map: map,
                title: 'Roberta'
            });
            $.ajax({
                url: restApiHome + "mower/getStatus/Roberta",
                dataType: "json",
                success: function (result) {
                    var contentString = '<h6>' + result.mowerName + '</h6>'
                        + 'Batteri:' + result.batteryProcent + '%</br>'
                        + result.status;
                    infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    mowerPos.addListener('click', function () {
                        infowindow.open(map, mowerPos);
                    });
                },
                error: function (xhr, status, error) {
                    $("#content").html(error);
                }
            });
        },
        error: function (xhr, status, error) {
            contentDiv.html(error);
        }
    });
    contentDiv.height($(window).height() - 150);
}
