

function fetchService(){
    const url = 'https://adalab.bmind.es/api/users';
    return (    fetch(url)
      .then(response => 
          response.json())
    )
}

export default fetchService;