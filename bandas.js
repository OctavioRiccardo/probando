/* --------------------------------Funciones Pagina de Bandas------------------------------------------------- */
window.addEventListener("load",cargarCardsJson)



function cargarCardsJson(){
    const parametrosUrl = new URLSearchParams(document.location.search);
    const generoUrl = parametrosUrl.get("genero");
    switch(generoUrl){
        case "power":
            fetch("../JSON/power.json")
            .then (res => res.json())
            .then(data => mostrarCards(data))
            break;
        case "doom":
            fetch("../JSON/doom.json")
            .then (res => res.json())
            .then(data => mostrarCards(data))
            break;
        case "heavy":
            fetch("../JSON/heavy.json")
            .then (res => res.json())
            .then(data => mostrarCards(data))
    }

}

function mostrarCards(ObjetoJson){
    const contenedorBandas = document.getElementById("contenedorBandas");
    const titulo = document.createElement("h1");
    titulo.innerHTML = `${ObjetoJson.titulo}`;
    const descripcion = document.createElement("p");
    descripcion.innerHTML = `${ObjetoJson.descripcion}`;
    descripcion.classList.add("descripcionGenero");
    const tituloBandas = document.createElement("h1");
    tituloBandas.innerHTML = "Bandas";
    contenedorBandas.appendChild(titulo);
    contenedorBandas.appendChild(descripcion);
    contenedorBandas.appendChild(tituloBandas);
    const row = document.createElement("div");
    row.classList.add("row", "m-3");
    for (let i = 0; i < ObjetoJson.bandas.length; i++) {
        const columna = document.createElement("div");
        columna.classList.add("col-md-4", "mt-3");
        const cardBanda = document.createElement("a");
        console.log(ObjetoJson.bandas[i].titulo);
        const parametrosUrl = new URLSearchParams(document.location.search);
        const generoUrl = parametrosUrl.get("genero");
        cardBanda.setAttribute("href", `./Grupo.html?genero=${generoUrl}&nombre=${ObjetoJson.bandas[i].titulo}`);
        const cardimage = document.createElement("div");
        cardimage.classList.add("card", "card-bandas");
        const imagenBanda = document.createElement("img");
        imagenBanda.classList.add("card-img-top");
        imagenBanda.setAttribute("src",`../${ObjetoJson.bandas[i].imgBanda}`)
        const cardbody = document.createElement("div");
        cardbody.classList.add("card-body");
        cardbody.innerHTML= `<ul class="list-group card-text">
        <li class="list-group-item card-info text-light">${ObjetoJson.bandas[i].titulo}</li>
        </ul>`;

        cardimage.appendChild(imagenBanda);
        cardimage.appendChild(cardbody);
        cardBanda.appendChild(cardimage);
        columna.appendChild(cardBanda);
        row.appendChild(columna);
        if(((i+1)%3)==0){
            contenedorBandas.appendChild(row.cloneNode(true));
            row.innerHTML="";
            continue;
        }
        if((i+1) == ObjetoJson.bandas.length){
            contenedorBandas.appendChild(row.cloneNode(true));
        }

    }
}