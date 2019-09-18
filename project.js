

const form = document.getElementById("film-form");
const  titleElement = document.querySelector("#title");
const  directorElement = document.querySelector("#director");
const  urlElement = document.querySelector("#url");



//UI Objesini başlatma



//Tüm eventleri yükleme

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
        //Yeni Film
        const newFilm = new Movie(title,director,url)
        addFilmToUI(newFilm) // Arayüze film ekleme
    }

    

    clearInputs(titleElement,directorElement,urlElement);
    removeMovie(e)

    e.preventDefault();
}

const apo = Aydin.myModule.init();
console.log(Aydin.myModule);
console.log(Aydin.myModule.getTest());



