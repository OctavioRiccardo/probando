window.addEventListener('load', cargarBandaJson);

function cargarBandaJson() {
    const parametrosUrl = new URLSearchParams(document.location.search);
    const generoUrl = parametrosUrl.get("genero");
    switch (generoUrl) {
        case "power":
            fetch("../JSON/power.json")
                .then(res => res.json())
                .then(data => mostrarBanda(data))
            break;
        case "doom":
            fetch("../JSON/doom.json")
                .then(res => res.json())
                .then(data => mostrarBanda(data))
            break;
        case "heavy":
            fetch("../JSON/heavy.json")
                .then(res => res.json())
                .then(data => mostrarBanda(data))
    }
}

function mostrarBanda(ObjetoJson) {
    const parametrosUrl = new URLSearchParams(document.location.search);
    const grupoUrl = parametrosUrl.get("nombre");
    const columnaTitulo = document.querySelector('.columnaDescripcionBanda');
    const columnaImagenBanda = document.querySelector('.columnaImagenBanda');
    const columnaCaracteristicas = document.querySelector('.columnaCaracteristicas');
    const columnaIntegrantes = document.querySelector('.columnaIntegrantes');
    const columnaAlbumes = document.querySelector('.contenedorAlbumes');
    for (let i = 0; i < ObjetoJson.bandas.length; i++) {
        if (grupoUrl == ObjetoJson.bandas[i].titulo) {
            const titulo = document.createElement('h1');
            titulo.innerHTML = ObjetoJson.bandas[i].titulo;
            const logo = document.createElement('img');
            logo.setAttribute('src', `../${ObjetoJson.bandas[i].imgLogo}`);
            columnaTitulo.appendChild(titulo);
            columnaTitulo.appendChild(logo);
            const imagenBanda = document.createElement('img');
            imagenBanda.setAttribute('src', `../${ObjetoJson.bandas[i].imgBanda}`);
            columnaImagenBanda.appendChild(imagenBanda);
            columnaCaracteristicas.innerHTML = `
            <p class="caracteristica">Genero: <span>${ObjetoJson.bandas[i].genero}</span></p>
            <p class="caracteristica">Pais: <span>${ObjetoJson.bandas[i].pais}</span></p>
            <p class="caracteristica">Estado: <span>${ObjetoJson.bandas[i].estado}</span></p>
            <p class="caracteristica">Año: <span>${ObjetoJson.bandas[i].año}</span></p>`
            columnaIntegrantes.innerHTML = `
            <div class="row filaIntegrante">
                <p><i class="fa-solid fa-microphone-lines"></i> ${ObjetoJson.bandas[i].integrantes[0].Ocupacion}: <span>${ObjetoJson.bandas[i].integrantes[0].nombre}</span></p>
            </div>
            <div class="row filaIntegrante">
                <p><i class="fa-solid fa-guitar"></i> ${ObjetoJson.bandas[i].integrantes[1].Ocupacion}: <span>${ObjetoJson.bandas[i].integrantes[1].nombre}</span></p>
            </div>
            <div class="row filaIntegrante">
                <p><i class="fa-solid fa-drum"></i> ${ObjetoJson.bandas[i].integrantes[2].Ocupacion}: <span>${ObjetoJson.bandas[i].integrantes[2].nombre}</span></p>
            </div>`
            for (let j = 0; j < ObjetoJson.bandas[i].albumes.length; j++) {
                console.log(ObjetoJson.bandas[i].albumes[j])
                const filaAlbum = document.createElement('div');
                filaAlbum.classList.add('filaAlbum');
                const AlbumBoton = document.createElement('div');
                AlbumBoton.classList.add('AlbumBoton');
                const columnaImagenAlbum = document.createElement('div');
                columnaImagenAlbum.classList.add('columnaImagenAlbum');
                const imagenAlbum = document.createElement('img');
                imagenAlbum.setAttribute('src', `../${ObjetoJson.bandas[i].albumes[j].imgAlbum}`);
                columnaImagenAlbum.appendChild(imagenAlbum);
                AlbumBoton.appendChild(columnaImagenAlbum);
                const columnaTextoAlbum = document.createElement('div');
                columnaTextoAlbum.classList.add('columnaTextoAlbum');
                columnaTextoAlbum.innerHTML = `<h2>${ObjetoJson.bandas[i].albumes[j].titulo}</h2>`;
                AlbumBoton.appendChild(columnaTextoAlbum);
                const iconFlecha = document.createElement('i');
                iconFlecha.classList.add('fa-solid', 'fa-chevron-down');
                AlbumBoton.appendChild(iconFlecha);
                const divClear = document.createElement('div');
                divClear.classList.add('clear');
                AlbumBoton.appendChild(divClear);
                filaAlbum.appendChild(AlbumBoton);
                const ContenedorCancionesAlbum = document.createElement('div');
                ContenedorCancionesAlbum.classList.add('ContenedorCancionesAlbum');
                const listaCanciones = document.createElement('ol');
                listaCanciones.classList.add('ListaCanciones');
                for (let k = 0; k < ObjetoJson.bandas[i].albumes[j].canciones.length; k++) {
                    const listItem = document.createElement('li');
                    listItem.classList.add('listItem');
                    listItem.innerHTML = ObjetoJson.bandas[i].albumes[j].canciones[k].nombre;
                    listaCanciones.appendChild(listItem);
                }
                ContenedorCancionesAlbum.appendChild(listaCanciones);
                filaAlbum.appendChild(ContenedorCancionesAlbum);
                columnaAlbumes.appendChild(filaAlbum);
            }
        }

    }
    Desplegador();
}

function Desplegador() {
    const albumBox = document.querySelectorAll('.filaAlbum');
    albumBox.forEach((item) => {
        const albumBoton = item.querySelector('.AlbumBoton');
        console.log(albumBoton);
        albumBoton.addEventListener('click', () => {
            const despliegue = document.querySelector('.listaDesplegada');
            muestraCanciones(item);
            if (despliegue && despliegue != item) {
                muestraCanciones(despliegue);
            }
        })
    })
}

function muestraCanciones(item) {
    const contenedorCanciones = item.querySelector('.ContenedorCancionesAlbum');
    if (item.classList.contains('listaDesplegada')) {
        contenedorCanciones.removeAttribute('style');
        item.classList.remove('listaDesplegada');
    } else {
        contenedorCanciones.style.height = contenedorCanciones.scrollHeight + 'px';
        item.classList.add('listaDesplegada');
    }
}

