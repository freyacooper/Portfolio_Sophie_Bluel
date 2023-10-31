const modal = document.createElement("div")
modal.classList.add("modal")
const modalBox = document.createElement("div")
modalBox.classList.add("modal-box")

const modalHeader = document.createElement("div")
modalHeader.classList.add("modal-header")
const cross = document.createElement("i")
cross.classList.add("fa-solid", "fa-xmark", "fa-xl")
modalHeader.appendChild(cross)

const modalTitre = document.createElement("h3")
modalTitre.innerText = "Galerie photo"

modalBox.appendChild(modalHeader)
modalBox.appendChild(modalTitre)
modal.appendChild(modalBox)

const barreEdition = document.querySelector(".barre-edition")
body.insertBefore(modal, barreEdition)

const boutonModifier = document.querySelector(".modifier")
boutonModifier.addEventListener("click", () =>{
    modal.style.display = "block"
})

modal.addEventListener("click", (event) => {
    if(event.target === modal) {
        modal.style.display = "none"
    }
})

cross.addEventListener("click", () => {
    modal.style.display = "none"
})