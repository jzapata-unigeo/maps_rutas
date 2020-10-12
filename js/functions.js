var map;
var marker;
var lat="";
var lng="";
var coords = {};    //coordenadas obtenidas con la geolocalización
var america_lat = 4.60971;
var america_lng = -74.08175;
const bogota = {lat: 4.60971, lng: -74.08175};
const labels = "";
let labelIndex = 0;



function start_map() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: america_lat, lng: america_lng},
        zoom: 11
    });
}


function initMap() {

    //usamos la API para geolocalizar el usuario
    navigator.geolocation.getCurrentPosition(
            function (position) {
                coords = {
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                };
                setMapa(coords);  //pasamos las coordenadas al metodo para crear el mapa


            }, function (error) {
        console.log(error);
    });

}


function setMapa(coords)
{
    //Se crea una nueva instancia del objeto mapa
    var map = new google.maps.Map(document.getElementById('map'),
            {
                zoom: 13,
                center: new google.maps.LatLng(coords.lat, coords.lng),

            });

    //Creamos el marcador en el mapa con sus propiedades
    //para nuestro obetivo tenemos que poner el atributo draggable en true
    //position pondremos las mismas coordenas que obtuvimos en la geolocalización
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(coords.lat, coords.lng)

    });
    //agregamos un evento al marcador junto con la funcion callback al igual que el evento dragend que indica 
    //cuando el usuario a soltado el marcador
    marker.addListener('click', toggleBounce);

    marker.addListener('dragend', function (event)
    {
        //escribimos las coordenadas de la posicion actual del marcador dentro del input #coords
        document.getElementById("my_lat").value = this.getPosition().lat();
        document.getElementById("my_lng").value = this.getPosition().lng();
    });
}


function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}



function addMarker(location, map) {
    new google.maps.Marker({

        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    }
    );
}


function get_my_location() {
    initMap();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $('#my_lat').val(position.coords.latitude);
            $('#my_lng').val(position.coords.longitude);

            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.panTo(curmarker.pos);
            map.setZoom(18);
            var marker = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                visible: true,
                position: pos,
                title: "Usted esta aquí"
            });
        });
    }
}


function Zoom(markerNum) {
    map.panTo(markers[markerNum].getPosition());
    map.setZoom(18);
}



function draw_rute(value) {
    if (value > 0) {
        $.ajax({
            type: 'POST',
            url: 'class/google.php',
            data: 'value=' + value,
            dataType: 'JSON',
            success: function (response) {
                draw_rute_map(response.lat, response.lng);
            }
        });
       
    }
}

function draw_rute_map(lat, lng) {
    start_map();
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var my_lat = $('#my_lat').val();
    var my_lng = $('#my_lng').val();
    var start = new google.maps.LatLng(my_lat, my_lng);
    var end = new google.maps.LatLng(lat, lng);
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode[$('#travel').val()]
    };


    directionsService.route(request, function (response, status) {
        var directionsDisplay = new google.maps.DirectionsRenderer({polylineOptions: {strokeColor: '#2E9AFE'}});
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(map);
            directionsDisplay.setOptions({SuppressMakers: false});
        }

    });

}

function findMe() {
    var output = document.getElementById('map');
    // Verificar si soporta geolocalizacion

    //Obtenemos latitud y longitud
    function localizacion(posicion) {
        var latitude = posicion.coords.latitude;
        var longitude = posicion.coords.longitude;
        var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&size=600x300&markers=color:red%7C" + latitude + "," + longitude + "&key=AIzaSyDJxNjFGz-ydX1Y4Ore2DvAQs4ueLAd9CQ&callback=start_map";
        output.innerHTML = "<img src='" + imgURL + "'>";
    }

    function error() {
        output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
    }
    navigator.geolocation.getCurrentPosition(localizacion, error);
}


function mapa() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: america_lat, lng: america_lng},
        zoom: 11
    });

    google.maps.event.addListener(map, "click", (event) => {

        addMarker(event.latLng, map);
    });

}

function deleteMarkers() {
    setMapOnAll(null);
    markers = [];
}

