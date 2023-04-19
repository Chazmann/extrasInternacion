console.log('Enlace establecido con "leerjson.js"');
//pim pam pum

// document.querySelector('#boton').addEventListener('hover', traerDatos());
document.querySelector('#info').innerHTML(traerDatos());

function crearsex(sexo) {
    if (sexo == 'male') {
        return 'male'
    } else if (sexo == 'female') {
        return 'female'
    } else {
        return 'vacio'
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

            for (let item of datos) {
                console.log(item)
                //pinto la tabla con los registros del json
                resp.innerHTML += `   <tr class="${crearsex(item.sexo)}">
                <td class=""><i class="material-icons-outlined">${item.laboratorio}</i> ${item.name}</td>
                <td>${item.edad}</td>
                <td>${item.patologia}</td>
                <td>${item.gastos}</td>
            </tr>
                
                `;
            }
        }
    }
 
}