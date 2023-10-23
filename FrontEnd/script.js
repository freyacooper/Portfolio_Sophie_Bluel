
let list

async function fetchWorks() {
    const response = await fetch("http://localhost:5678/api/works")
    list = await response.json()
    return list
}

fetchWorks().then(list => {
    afficherElements(list)
})

const sectionPortfolio = document.getElementById("portfolio")
const divGallery = document.querySelector(".gallery")

const divFilters = document.createElement("div")
divFilters.classList.add("filters")

const filterObjets = document.createElement("a")
filterObjets.innerText = "Objets"

const filterTous = document.createElement("a")
filterTous.classList.add("filter-active")
filterTous.innerText = "Tous"

const filterAppart = document.createElement("a")
filterAppart.innerText = "Appartements"

const filterHotels = document.createElement("a")
filterHotels.innerText = "Hôtels & restaurants"

divFilters.appendChild(filterTous)
divFilters.appendChild(filterObjets)
divFilters.appendChild(filterAppart)
divFilters.appendChild(filterHotels)

sectionPortfolio.insertBefore(divFilters, divGallery)



filterObjets.addEventListener("click", () => {
    const listFilterObjets = list.filter(function (projet) {
        return projet.categoryId === 1
    })
    divGallery.innerHTML = ""  
    afficherElements(listFilterObjets)
})

filterAppart.addEventListener("click", () => {
    const listFilterAppart = list.filter(function (projet) {
        return projet.categoryId === 2
    })
    divGallery.innerHTML = ""  
    afficherElements(listFilterAppart)
})

filterHotels.addEventListener("click", () => {
    const listFilterHotels = list.filter(function (projet) {
        return projet.categoryId === 3
    })
    divGallery.innerHTML = ""  
    afficherElements(listFilterHotels)
})

filterTous.addEventListener("click", () => {
    divGallery.innerHTML = ""  
    afficherElements(list)
})

const filtersElement = document.querySelectorAll(".filters a")
filtersElement.forEach(filterElement => {
    filterElement.classList.add("filter")
    filterElement.addEventListener("click", () => {
        document.querySelector(".filter-active")?.classList.remove("filter-active")
        filterElement.classList.add("filter-active")
    })
})

function afficherElements(list) {
    for(let i = 0; i < list.length; i++) {
        const projet = list[i]
        const divGallery = document.querySelector(".gallery")
        const figure = document.createElement("figure")

        const img = document.createElement("img")
        img.src = projet.imageUrl

        const caption = document.createElement("figcaption")
        caption.innerText = projet.title

        figure.appendChild(img)
        figure.appendChild(caption)

        divGallery.appendChild(figure)
    }
}


function ajoutListenerLogin() {
    const formLogin = document.querySelector("#login form")
    formLogin.addEventListener("submit", (event) => {
        event.preventDefault()

        const userLogin = {
            email: event.target.querySelector("[name=email]").value,
            password: event.target.querySelector("[name=password]").value,
        }

        console.log(userLogin)
    })
}

ajoutListenerLogin()