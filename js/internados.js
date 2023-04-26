console.log('Enlace establecido con "internados.js"');
// document.querySelector('#boton').addEventListener('hover', traerDatos());
document.querySelector('#info').append(traerDatos());
document.querySelector('#camas').append(tarJeta());

function crearsex(sexo) {
    if (sexo == 'male') {
        return 'male'
    } else if (sexo == 'female') {
        return 'female'
    } else {
        return 'vacio'
    }
}

function seguimiento(active) {
    if (active == true) {
        return 'visibility'
    } else if (active == false) {
        return 'visibility_off'
    } else {
        return 'visibility_off'
    }
}

function traerDatos() {
    console.log('dentro de la función');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/internacion.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //selecciono el ID donde voy a colocar la info
            resp.innerHTML = '';
            //recorro el json y voy creando un item por cada registro
            for (var item of datos) {
                console.log(' Nro de Cama ' , item.cama)
                //pinto la tabla con los registros del json
                resp.innerHTML += ` 
                
                
                <tr class="${crearsex(item.sexo)}">
                <td class=""><p>${item.name}</p><p class="material-icons-outlined">${item.laboratorio}</p></td>
                <td><p>Edad</p>${item.edad}</td>
                <td><p></p>${item.patologia}</td>
                <td>${item.gastos}</td>
                <td> <p class="material-icons-outlined">${seguimiento(item.active)}</p></td>
            </tr>
                


                `;
            }
        }
    }
 
}
