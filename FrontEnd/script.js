let list

async function fetchWorks() {
    const response = await fetch("http://localhost:5678/api/works")
    list = await response.json()
    return list
}

fetchWorks().then(list => {
    
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
})

// function afficherGallery(list) {
//     for(let i = 0; i < list.length; i++) {
//             const projet = list[i]
//             console.log(list[i])
//             const divGallery = document.querySelector(".gallery")
//             const figure = document.createElement("figure")

//             const img = document.createElement("img")
//             img.src = projet.imageUrl

//             const caption = document.createElement("figcaption")
//             caption.innnerText = projet.title

//             figure.appendChild(img)
//             figure.appendChild(caption)

//             divGallery.appendChild(figure)
//         }
// }

// afficherGallery(list)