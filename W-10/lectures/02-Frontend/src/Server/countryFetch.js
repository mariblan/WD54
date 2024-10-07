const fetchCountries = async () => {
  const reponse = await fetch("http://localhost:3000/countries");
  const data = await reponse.json();
  console.log(data);
  return data;
};

const fetchCountryById = async (countryId) => {
  const reponse = await fetch(
    `http://localhost:3000/countries/countryById/${countryId}`
  );
  const data = await reponse.json();
  console.log(data);
  return data;
};

const createCountry = async (country) => {
  const response = await fetch("http://localhost:3000/countries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(country),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export { fetchCountries, fetchCountryById, createCountry };
