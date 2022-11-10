export const SearchApi = async (string) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9bfcadfddfmsh7a0571419a27e28p16f0fajsn6ec57357a78d',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };
  const response = await fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${string}`, options)
  try {
    const data = response.json();
    console.log("I am response from API",data)
    return data;
  } catch (error) {
    console.log(error);
  }
};



