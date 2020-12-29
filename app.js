// Tu códgigo aquí
document.querySelector('#get-joke').addEventListener('click', traerDatos);

function traerDatos() {
    console.log("dentro funcion");

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', ' https://api.chucknorris.io/jokes/random', true);

    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)
            let joke = document.querySelector('#displayJoke');
            joke.innerHTML = `${datos.value}`;

        }
    }
    xhttp.send();
}

