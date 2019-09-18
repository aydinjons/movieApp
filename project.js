
//Selecting neccassery elements from dom
const form = document.getElementById("film-form");
const  titleElement = document.querySelector("#title");
const  directorElement = document.querySelector("#director");
const  urlElement = document.querySelector("#url");
const filmsBody = document.querySelectorAll(".card-body")[1]
const deleteButton = document.getElementById("delete-film")



//initializing UI object



//loading all events

eventListener()
function eventListener(){
    form.addEventListener("submit", addFilm);
    filmsBody.addEventListener("click", removeFilm)
}

function addFilm(e){

    const title = titleElement.value;
    const director =directorElement.value;
    const url = urlElement.value;

    if(title ==="" || director ==="" || url=== ""){
        instanceUI.displayMessages("Tüm alanları doldurun","danger")
    }else{
        //New Movie
        const newFilm = new Movie(title,director,url)
        instanceUI.addFilmToUI(newFilm) // Adding movie to ui
        instanceUI.displayMessages("Film başarıyla eklendi", "success")
    }

    

    instanceUI.clearInputs(titleElement,directorElement,urlElement); // Clearing text box after click the submit button
    removeMovie(e)

    e.preventDefault(); // this method prevent reload the web page.
}

function removeFilm(e){

    if(e.target.id = "delete-film"){
        instanceUI.removeFilms(e.target)
    }

}






