document.getElementById('input').addEventListener('input', function(e){
    const kg = e.target.value;
    document.getElementById('gramsOutput').innerHTML = kg * 1000
    document.getElementById('poundsOutput').innerHTML = kg * 2.20462
    document.getElementById('ouncesOutput').innerHTML = kg * 35.274
})