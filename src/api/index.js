const ref = {};

const apiKey = '1adf77b0e0fe616d9cde0118729bac1d';
const getCurrent = async(city = '') => {
  if (city.length < '5') {
    return {};
  }

  if(ref[city]) {
    return ref[city];
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const result = await fetch(url);
    const json = await result.json();
    return json;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export {
  getCurrent,
}