/*----------------------------------------Funcion de Paginacion------------------------------------------------------- */


/*----------------------------------------Funcion de Validacion Pagina de formulario------------------------------------------------------- */
const precio = 1000;
var cant = document.getElementById('validCant');
var opcionesPago = document.getElementById('validaOpcionesDePago');
var preci = document.getElementById('precio');
cant.addEventListener('input', actualizarPrecioTotal);
opcionesPago.addEventListener('change', actualizarPrecioTotal);

function actualizarPrecioTotal() {
    var cantidad = parseInt(cant.value, 10);
    var opcionPago = opcionesPago.value;
    var total = precio * cantidad;

    if (opcionPago === "1") {
        total *= 0.9; // Aplicar descuento del 10%
        preci.innerHTML = `
        <div class="row g-3"style="margin: auto; padding: 20px auto;">
            <div class="col-md-6" id="tipoTarjetaDeb">
                <label for="validaTarjetaDeb" class="form-label col-form" style="font-size: 16px;">Nombre de Tarjeta:</label>
                <select class="form-select" id="validaTarjetaDeb" required>
                    <option selected disabled value="">Tarjeta...</option>
                    <option value="1">Mercado Pago</option>
                    <option value="2">VISA</option>
                    <option value="3">CABAL</option>
                    <option value="4">Mastercard Débito</option>
                </select>
            </div>
            <div class="col-md-6 precio-texto" style="font-size: 16px;" >
                <p>El precio a pagar es de: ${total} pesos</p>
            </div>
        </div>
        `;
    } else {
        preci.innerHTML = `
            <div class="row g-3"style="margin: auto; padding: 20px auto;">
                <div class="col-md-4" id="tipoTarjetaCred">
                    <label for="validaTarjetaCred" class="form-label col-form" style="font-size: 16px;">Nombre de Tarjeta:</label>
                    <select class="form-select" id="validaTarjetaCred" required>
                        <option selected disabled value="">Tarjeta...</option>
                        <option value="1">VISA</option>
                        <option value="2">MASTERCARD</option>
                        <option value="3">BBVA</option>
                        <option value="4">NARANJA</option>
                    </select>
                </div>
                <div class="col-md-4" id="cantidadCuotas">
                    <label for="validaCuotas" class="form-label col-form" style="font-size: 16px;">Cantidad de Cuotas</label>
                    <select class="form-select" id="validaCuotas" required>
                        <option selected disabled value="">Cuotas...</option>
                        <option value="1">1</option>
                        <option value="2">3</option>
                        <option value="3">6</option>
                        <option value="4">12</option>
                    </select>
                </div>
                <p class="col-md-4 precio-texto" style="font-size: 16px;">3 y 6 cuotas contienen 10% interes y 12 cuotas el 12% de interes</p>
            </div>
        `;
    }



}



function validacion() {
    var btn = document.getElementById("boton");
    btn.addEventListener('click', versionPropia());
}

function versionPropia() {
    let forms = document.querySelectorAll('.needs-validation');
    var aux = false;
    forms.forEach(function (form) {
        var wasValidated = form.classList.contains('was-validated');
        if (form.checkValidity()) {
            form.classList.add('was-validated');
            aux = true;
        } else {
            form.classList.add('was-validated');
        }
        if (aux == true) {

            form.innerHTML = "";
            manejoForm.innerHTML = `
            <form class="row g-3 needs-validation" novalidate>
            <div class="row g-3">
                <div class="col-md-12">
                    <label for="validaTarjeta" class="form-label col-form">Numero de Tarjeta</label>
                    <input pattern=".{19,19}" type="text" class="form-control" id="validaTarjeta" minlength="19" maxlength="19" maxSize autocomplete="off"
                        required>
                </div>
                <div class="col-md-3">
                    <label for="validaDia" class="form-label col-form">Fecha</label>
                    <select class="form-select" id="validaDia" required>
                        <option selected disabled value="">mes...</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="validaDia" class="form-label col-form">Vencimiento</label>
                    <select class="form-select" id="validaAño" required>
                        <option selected disabled value="">Año...</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="validaCodigoSeguridad" class="form-label col-form">CVV</label>
                    <input type="text" class="form-control" maxlength="3" id="validaCodigoSeguridad"
                        required>
                </div>
                <div class="col-md-3">
                    <label for="validaCodigoPostal" class="form-label col-form">Codigo Postal</label>
                    <input type="text" class="form-control" id="validaCodigoPostal"  maxlength="5"
                        required>
                </div>
                <div class="col-md-12 precio-texto">
                        <label for="validaCorreo" class="form-label col-form">Correo Electronico :</label>
                        <input type="email" class="form-control" id="validaCorreo" required>
                </div>

                <div class="col-md-6">
                    <label for="validaCompIdentidad" class="form-label col-form">Identidad:</label>
                    <select class="form-select" id="validaCompIdentidad" required>
                        <option selected disabled value="">Identidad...</option>
                        <option value="1">Documento</option>
                        <option value="2">CI</option>
                        <option value="3">LC</option>
                        <option value="4">LE</option>
                        <option value="5">otro</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="validaNumeroIdent" class="form-label col-form">Numero de identidad</label>
                    <input type="text" class="form-control" maxlength="8"  id="validaNumeroIdent"
                        required>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                        <label class="form-check-label col-form" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div class="col-md-6">
                    <button class="btn boton-form" type="button" id="boton" onclick="validacionFinal();">Finalizar Compra</button>
                </div>
                <div class="col-md-6">
                    <input class="btn boton-form" type="button" onclick="location.reload();" name="Cancelar Compra" value="Cancelar compra">
                </div>
            </div>     
            </form>
            `;
            // carga select de manera dinamica
            for (let i = 1; i <= 12; i++) {
                let opcion = document.createElement('option');
                opcion.value = i;
                opcion.innerText = i;
                validaDia.appendChild(opcion);
            }
            for (let i = 1; i <= 8; i++) {
                let opcion = document.createElement('option');
                opcion.value = i;
                opcion.innerText = 2022 + i;
                validaAño.appendChild(opcion);
            }
            // control numero tarjeta
            validaTarjeta.addEventListener('keyup', function (e) {
                var valorInput = e.target.value;
                // elimina espacios en blanco// elimina todas las letras // cada 4 numeros coloca espacio// quita espacio final
                validaTarjeta.value = valorInput.replace(/\s/g, '').replace(/\D/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
            });
            // control numero documento
            validaNumeroIdent.addEventListener('keyup', function (e) {
                var valorInput = e.target.value;
                // elimina espacios en blanco// elimina todas las letras //  quita espacio final
                validaNumeroIdent.value = valorInput.replace(/\s/g, '').replace(/\D/g, '').trim();
            });
            // control codigo tarjeta
            validaCodigoSeguridad.addEventListener('keyup', function (e) {
                var valorInput = e.target.value;
                // elimina espacios en blanco// elimina todas las letras //  quita espacio final
                validaCodigoSeguridad.value = valorInput.replace(/\s/g, '').replace(/\D/g, '').trim();
            });
            // control codigo postal
            validaCodigoPostal.addEventListener('keyup', function (e) {
                var valorInput = e.target.value;
                // elimina espacios en blanco// elimina todas las letras //  quita espacio final
                validaCodigoPostal.value = valorInput.replace(/\s/g, '').replace(/\D/g, '').trim();
            });
        }

    });
}



function validacionFinal() {
    var btnF = document.getElementById("boton");
    btnF.addEventListener('click', validarCompra());
}


function validarCompra() {
    let forms = document.querySelectorAll('.needs-validation');
    forms.forEach(function (form) {

        if (form.checkValidity()) {

            form.classList.add('was-validated');
            form.submit();
        } else {
            form.classList.add('was-validated');
        }
    });
}

/*---------------------------------------------------------------------------------------------------------------------------------------- */

/*-----------------------------------------------Peticiones HTTP-------------------------------------------------------*/

function DatosGenero1() {
    fetch('./JSON/power.json')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('No se pudo obtener la informacion.');
        })
        .then(function (data) {
            // Hacer algo con los datos
            console.log("Datos Genero 1", data);
        })
        .catch(function (error) {
            // Manejar errores
            console.log(error);
        });
}

function DatosGenero2() {
    fetch('./JSON/heavy.json')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('No se pudo obtener la informacion.');
        })
        .then(function (data) {
            // Hacer algo con los datos
            console.log("Datos Genero 2", data);
        })
        .catch(function (error) {
            // Manejar errores
            console.log(error);
        });
}

function DatosGenero3() {
    fetch('./JSON/doom.json')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('No se pudo obtener la informacion.');
        })
        .then(function (data) {
            // Hacer algo con los datos
            console.log("Datos Genero 3", data);
        })
        .catch(function (error) {
            // Manejar errores
            console.log(error);
        });
}

function CargaDatos() {
    DatosGenero1();
    DatosGenero2();
    DatosGenero3();
}
/*----------------------------------------------------------------------------------------------------------------------------*/
