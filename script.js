const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '79a0341a5dmsh12008dbd351fbaap16f584jsn13822fa60adb',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  const getWeather=(city) =>{
    alert("hello");
cityName.innerHTML=city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
        .then(response=>response.json())
        .then((response)=> {
              temp.innerHTML =response.temp
              humidity.innerHTML=response.humidity
              min_temp.innerHTML =response.min_temp
              max_temp.innerHTML=response.max_temp
              wind_speed.innerHTML=response.wind_speed
              wind_degrees.innerHTML=response.wind_degrees
        })
        .catch(err => console.error(err));
  }

  searchid.addEventListener("load",(e)=>{
    e.preventDefault( )
    getWeather(city.value)
  })
  getWeather("Default")