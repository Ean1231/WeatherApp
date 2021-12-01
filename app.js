window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempretureDescription = document.getElementById('tempreture-description');
    let tempretureDegree = document.getElementById('tempreture-degree');
    let locationTimezone = document.getElementById('location-timezone');
    let Icon = document.getElementById('icon');

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = 'http://api.weatherapi.com/v1/current.json?key=b9465ae7e900471fba8115552210112&q=Kimberley'
           // b9465ae7e900471fba8115552210112
            // http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London
           //08d8730c5ab5ffd426182b2ae1cedfb0

           //http://api.openweathermap.org/data/2.5/weather?q=Kimberley&appid=b9465ae7e900471fba8115552210112
            fetch(api).then(response => {
                return response.json();
            }).then(data => {
                console.log(data)
                const {temp_c} = data.current;
                const {name, country} = data.location;
                const {text} = data.current.condition;
                tempretureDegree.textContent = temp_c;
                tempretureDescription.textContent = text;
                Icon.textContent = country;
                locationTimezone.textContent = name;
             })
        });
    
    }else{
        alert('Please Enable location on browser')
    }
})