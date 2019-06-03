

function fetchService(){
    const url = 'https://raw.githubusercontent.com/elvirafuente/people-data/master/users.json';
    return (    fetch(url)
      .then(response => 
          response.json())
    )
}

export default fetchService;