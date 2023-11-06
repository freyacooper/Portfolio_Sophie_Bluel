const modalFormulaire = document.createElement("div")
modalFormulaire.classList.add("modal")

const modalFormulaireBox = document.createElement("div")
modalFormulaireBox.classList.add("modal-box")

const modalFormulaireHeader = document.createElement("div")
modalFormulaireHeader.classList.add("modal-header")
const crossFormulaire = document.createElement("i")
crossFormulaire.classList.add("fa-solid", "fa-xmark", "fa-xl")
const retour = document.createElement("i")
retour.classList.add("fa-solid", "fa-arrow-left", "fa-xl")
modalFormulaireHeader.appendChild(crossFormulaire)
modalFormulaireHeader.appendChild(retour)

const modalFormulaireTitre = document.createElement("h3")
modalFormulaireTitre.innerText = "Ajout photo"

const form = document.createElement("form")

const photoUpload = document.createElement("input")
photoUpload.setAttribute("type", "file")
photoUpload.setAttribute("accept", "image/jpeg")
photoUpload.setAttribute("accept", "image/png")

const divPhoto = document.createElement("div")
divPhoto.classList.add("div-photo")
const photoIcon = document.createElement("i")
photoIcon.classList.add("fa-regular", "fa-image", "fa-6x")
const photoButton = document.createElement("a")
photoButton.innerText = "+ Ajouter photo"
const photoInfo = document.createElement("p")
photoInfo.innerText = "jpg, png : 4mo max"
divPhoto.appendChild(photoIcon)
divPhoto.appendChild(photoButton)
divPhoto.appendChild(photoInfo)

const labelTitre = document.createElement("label")
labelTitre.setAttribute("for", "titre")
labelTitre.innerText = "Titre"
const titre = document.createElement("input")
titre.setAttribute("type", "text")
titre.setAttribute("name", "titre")
titre.setAttribute("id", "titre")

const labelCat = document.createElement("label")
labelCat.setAttribute("for", "categorie")
labelCat.innerText = "Catégorie"
const cat = document.createElement("select")
cat.setAttribute("name", "categorie")
cat.setAttribute("id", "categorie")
const optionObjets = document.createElement("option")
optionObjets.innerText = "Objets"
optionObjets.setAttribute("value", "objets")
const optionAppart = document.createElement("option")
optionAppart.innerText = "Appartements"
optionAppart.setAttribute("value", "appartements")
const optionHotels = document.createElement("option")
optionHotels.innerText = "Hotels & restaurants"
optionHotels.setAttribute("value", "hotels")
cat.appendChild(optionObjets)
cat.appendChild(optionAppart)
cat.appendChild(optionHotels)

form.appendChild(divPhoto)
form.appendChild(photoUpload)
form.appendChild(labelTitre)
form.appendChild(titre)
form.appendChild(labelCat)
form.appendChild(cat)

const divFormulaireLine = document.createElement("div")
divFormulaireLine.classList.add("line")

const boutonValider = document.createElement("a")
boutonValider.innerText = "Valider"

modalFormulaireBox.appendChild(modalFormulaireHeader)
modalFormulaireBox.appendChild(modalFormulaireTitre)
modalFormulaireBox.appendChild(form)
modalFormulaireBox.appendChild(divFormulaireLine)
modalFormulaireBox.appendChild(boutonValider)
modalFormulaire.appendChild(modalFormulaireBox)

body.insertBefore(modalFormulaire, modal)


// const boutonAjouter = document.querySelector(".modal-box a")
boutonAjouter.addEventListener("click", () => {
    modalFormulaire.style.display = "block"
    modal.style.display = "none"
})

modalFormulaire.addEventListener("click", (event) => {
    if(event.target === modalFormulaire) {
        modalFormulaire.style.display = "none"
    }
})

crossFormulaire.addEventListener("click", () => {
    modalFormulaire.style.display = "none"
})

retour.addEventListener("click", () => {
    modalFormulaire.style.display = "none"
    modal.style.display = "block"
})