function getLocation() {
    //check the browser supported
    if (navigator.geolocation) {
        //get position
        navigator.geolocation.getCurrentPosition(function (res) {
            //get geo code
            let lat = res.coords.latitude;
            let lon = res.coords.longitude;
            alert("Current Location, latitude:" + lat + ",longitude:" + lon)
        });
    } else {
        alert('Geolocation is not supported by this browser!')
    }
}