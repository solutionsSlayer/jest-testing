const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })

}

const getPeople = async fetch => {
    const getResponse = await fetch('https://swapi.dev/api/people');
    const response = await getResponse.json();
    
    return {
        count: response.count,
        results: response.results
    }
}

module.exports = {
    getPeople,
    getPeoplePromise
}