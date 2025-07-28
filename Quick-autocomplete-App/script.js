const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
let states;

const getStates = async () => {
    const res = await fetch('./state.json');
    states = await res.json();
}

const searchStates = (searchText) => {
    let matches = states.filter(state => {
        let regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex)
    })

    if(searchText >= 0){
        matches = []
    }
    outputHtml(matches)
}

const outputHtml = (matches) => {
    let html = matches.map((match) => 
     `<div class='card card-body bg-dark my-3'>
        <h2 class='dark-secondary'>${match.name} (${match.abbr})
           <br/> <span class='text-primary'>${match.capital}</span>
        </h2>
        <small>Lat: ${match.lat} / Long: ${match.long}</small>
     </div>`
    ).join('')
    
    matchList.innerHTML = html
}

window.addEventListener('DOMContentLoaded', getStates);
search.addEventListener('input', () => searchStates(search.value))