const url = new URL("https://adalab.bmind.es/api/users");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

function fetchUsers(){
    fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
}

export default fetchUsers;