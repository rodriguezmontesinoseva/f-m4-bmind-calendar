function fetchService() {
//   const url = "https://adalab.bmind.es/api/users";
  const url= "https://raw.githubusercontent.com/Adalab/f-m4-bmind-calendar/master/src/data/users.json";
  return fetch(url).then(response => response.json());
}

export default fetchService;
