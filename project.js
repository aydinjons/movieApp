
//Selecting neccassery elements from dom
const form = document.getElementById("film-form");
const  titleElement = document.querySelector("#title");
const  directorElement = document.querySelector("#director");
const  urlElement = document.querySelector("#url");



//initializing UI object



//loading all events

eventListener()
function eventListener(){
    form.addEventListener("submit", addFilm);
}

function addFilm(e){

    const title = titleElement.value;
    const director =directorElement.value;
    const url = urlElement.value;

    if(title ==="" || director ==="" || url=== ""){
        displayMessages("Tüm alanları doldurun","danger")
    }else{
        //New Movie
        const newFilm = new Movie(title,director,url)
        addFilmToUI(newFilm) // Adding movie to ui
    }

    

    clearInputs(titleElement,directorElement,urlElement); // Clearing text box after click the submit button
    removeMovie(e)

    e.preventDefault(); // this method prevent reload the web page.
}






