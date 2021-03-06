const axios = require('axios');

const ID = '82c0fb0408c81579f66aa090ae4626d1';
const OPEN_WEATHER_MAP_URL =
'http://samples.openweathermap.org/data/2.5/weather?units=metric&appid=82c0fb0408c81579f66aa090ae4626d1';
const HEADERS = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET'
  }
}
const GETURI = q => {
  const _q = encodeURIComponent(q)
  return `http://samples.openweathermap.org/data/2.5/weather?q=${_q}&appid=${ID}`
}

module.exports = {
  getTemp: function(location) {
    return new Promise((res, rej) => {
      if (location === 'a') { return rej('A is not valid'); }
      setTimeout(() => {
        res(101);
      }, 500);
    })
    /*
    return axios.get(GETURI(location)).then(res => {
      console.log(res);
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, err => {
      throw new Error(err.data.message);
    });
    */
  }
}
