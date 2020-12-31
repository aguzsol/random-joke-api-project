document.querySelector('#get-joke').addEventListener('click', function(){
    traerDatos();
});


function traerDatos(){
    const url = 'https://api.chucknorris.io/jokes/random'

    fetch(url).
    then(response => response.json()).
    then(data =>displayJoke.innerHTML = data.value)
}