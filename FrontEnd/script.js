
const listWorks = fetch("http://localhost:5678/api/works").then(listWorks => listWorks.json())
console.log(listWorks)

function afficherGallery(listWorks) {
    for(let i = 0; i < listWorks.length; i++) {
            const projet = listWorks[i]
            console.log(listWorks[i])
            const divGallery = document.querySelector(".gallery")
            const figure = document.createElement("figure")

            const img = document.createElement("img")
            img.src = projet.imageUrl

            const caption = document.createElement("figcaption")
            caption.innnerText = projet.title

            figure.appendChild(img)
            figure.appendChild(caption)

            divGallery.appendChild(figure)
        }
}

afficherGallery(listWorks)