//conexión con un json desde un https
fetch('https://randomuser.me/api/?results=16')
    .then(response => response.json())
    .then(data => {
        crearCards(data.results)
    })

// funcion para asignar colores de fondo a cada tarjeta según la edad de registro
// creo 5 categorías, generando una clase a la cual le asigno propiedades desde la hoja de estilos
function crearColor(edad) {
    if (edad <= 3) {
        return 'nuevo'
    } else if (edad <= 5) {
        return 'medio'
    } else if (edad <= 10) {
        return 'avanzado'
    } else if (edad <= 15) {
        return 'pro'
    } else {
        return 'maestro'
    }
}
//creo la función crear tarjetas y apunto al contenedor dentro de dónde se van a completar las respectivas tarjetas
function crearCards(usuarios) {
    //selecciono mi  DIV.CONTAINER
    let container = document.querySelector('.container')
        //para cada usuario creo la siguiente estructura de tarjeta
    usuarios.forEach(usuario => {
        container.innerHTML += `
    <div class="tarjeta ${crearColor(usuario.registered.age)}">
        <div class="puntos">. . .</div>
        <div class="card">
            <div class="card-name">

                <div class="card-name-item">
                    <img src="${usuario.picture.large}" alt="" height="65px">
                    <div class="card-title">
                        <!-- con ${usuario.xxx} inserto el dato que voy a extraer del json creado desde el https-->
                        <h5>${usuario.name.first} ${usuario.name.last}</h5>
                        <p class="phone">${usuario.phone}</p>
                        <div class="stats">
                            <div>
                                <p>Género</p>
                                <p>${usuario.gender}</p>
                            </div>
                            <div>
                                <p>42455</p>
                                <p>${usuario.nat}</p>
                            </div>
                            <div>
                                <p>2323</p>
                                <p>Follow</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="ranking">
                <h2>${usuario.registered.age}</h2>
                <p>ranking</p>
            </div>

        </div>
    </div>
</div>
    `
    })

}