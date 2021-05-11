const apiKey = '1adf77b0e0fe616d9cde0118729bac1d';
const getCurrent = async(city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const result = await fetch(url);
    return await result.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export {
  getCurrent,
}