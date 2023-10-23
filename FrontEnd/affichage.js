
export function afficherElements(list) {
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