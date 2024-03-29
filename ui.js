var Aydin = Aydin || {};

Aydin.myModule = (function (){

    return {
        init : () => new UI(),
    }
    
})();


    
function UI() {
        
}

const instanceUI = Aydin.myModule.init();


UI.prototype.addFilmToUI = function (newFilm) {

    const filmList = document.getElementById("films")
    filmList.innerHTML += `
            <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    `;

   
}

UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessages= function(message,type){
    const cardBody = document.querySelectorAll(".card-body")[0];
    //Alert divini oluşturma

    const div = document.createElement("div")
    div.className = `alert alert-${type}`
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(() => {
        div.remove()
    }, 2000);

}

UI.prototype.removeFilms = function(element){
    element.parentElement.parentElement.remove()
}

UI.prototype.removeAllFilms = function(){
    const filmList = document.getElementById("films")
    filmList.innerHTML = ""
}









