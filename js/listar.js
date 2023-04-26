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

function tarJeta() {
    console.log('dentro de la función');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/internacion.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let ldatos = JSON.parse(this.responseText);
            //selecciono el ID donde voy a colocar la info
            camas.innerHTML = '';
            //recorro el json y voy creando un persona por cada registro
            for (var persona of ldatos) {
                console.log(' Nro de Cama ' , persona.cama)
                //pinto la tabla con los registros del json
                camas.innerHTML += ` 
                
                <div class="cama ">
            <div class="head ${crearsex(persona.sexo)} flex_x"><i class="material-icons-outlined rojo">${seguimiento(persona.active)}</i>CAMA-A002-${'0'+persona.cama}</div>
            <div class="paciente flex_x fcol">
                <div class="datos w100 flex_x">
                    <h5>${persona.name}</h5>
                    <h5>${persona.edad+' años'}</h5>
                </div>
                <div class="datos w100 flex_x">
                    <h6></h6>
                    <h5 class="capi">${persona.patologia}</h5>
                </div>
                <div class="datos w100 flex_x">
                    <h6>Ingreso</h6>
                    <h6>${persona.ingreso}</h6>
                </div>
            </div>
            <div class="foot">
                <p class="material-icons-outlined">${persona.laboratorio}</p>
            </div>
        </div>


                
                <!-- <tr class="${crearsex(persona.sexo)}">
                <td class=""><p></p><p class="material-icons-outlined">${persona.laboratorio}</p></td>
                <td><p>Edad</p></td>
                <td><p></p></td>
                <td>${persona.gastos}</td>
                <td> <p class="material-icons-outlined"></p></td>
            </tr> -->
                


                `;
            }
        }
    }
 
}




