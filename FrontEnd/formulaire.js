const modalFormulaire = document.createElement("div")
modalFormulaire.classList.add("modal")

const modalFormulaireBox = document.createElement("div")
modalFormulaireBox.classList.add("modal-box")

const modalFormulaireHeader = document.createElement("div")
modalFormulaireHeader.classList.add("modal-header")
const crossFormulaire = document.createElement("i")
crossFormulaire.classList.add("fa-solid", "fa-xmark", "fa-xl", "clickable")
const retour = document.createElement("i")
retour.classList.add("fa-solid", "fa-arrow-left", "fa-xl", "clickable")
modalFormulaireHeader.appendChild(crossFormulaire)
modalFormulaireHeader.appendChild(retour)

const modalFormulaireTitre = document.createElement("h3")
modalFormulaireTitre.innerText = "Ajout photo"

const form = document.createElement("form")

const photoUpload = document.createElement("input")
photoUpload.setAttribute("type", "file")
photoUpload.setAttribute("accept", "image/jpeg")
photoUpload.setAttribute("accept", "image/png")
photoUpload.style.display = "none"

const divPhoto = document.createElement("div")
divPhoto.classList.add("div-photo", "clickable")
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

const optionVide = document.createElement("option")
cat.appendChild(optionVide)
fetch("http://localhost:5678/api/categories").then(res => {
    return res.json()
})
.then(data => { const categories = data
    categories.forEach(category => {
        const optionCategory = document.createElement("option")
        optionCategory.innerText = category.name
        optionCategory.setAttribute("value", `${category.name}`)
        optionCategory.setAttribute("data-id", `${category.id}`)
        cat.appendChild(optionCategory)
    })
})

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
boutonValider.setAttribute("disabled", "disabled")
boutonValider.classList.add("modal-button", "disabled")

modalFormulaireBox.appendChild(modalFormulaireHeader)
modalFormulaireBox.appendChild(modalFormulaireTitre)
modalFormulaireBox.appendChild(form)
modalFormulaireBox.appendChild(divFormulaireLine)
modalFormulaireBox.appendChild(boutonValider)
modalFormulaire.appendChild(modalFormulaireBox)

body.insertBefore(modalFormulaire, modal)

divPhoto.addEventListener("click", () => {
    photoUpload.click()
})

const preview = document.createElement("img")

photoUpload.addEventListener("change", () => {
    let source = ""
    source = window.URL.createObjectURL(photoUpload.files[0])
    preview.src = source
    preview.classList.add("preview")

    photoIcon.style.display = "none"
    photoButton.style.display = "none"
    photoInfo.style.display = "none"
    divPhoto.appendChild(preview)
})

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

form.addEventListener("change", () => {
    const photoValue = window.URL.createObjectURL(photoUpload.files[0])
    const titreValue = titre.value
    const catValue = cat.value
    if(photoValue !== "" && titreValue !== "" && catValue !== "") {
        boutonValider.classList.remove("disabled")
        boutonValider.classList.add("clickable")
        boutonValider.removeAttribute("disabled")
    } else {
        boutonValider.classList.add("disabled")
        boutonValider.classList.remove("clickable")
        boutonValider.setAttribute("disabled", "disabled")
    }
})

boutonValider.addEventListener("click", () => {
    const token = localStorage.getItem("token")
    const formInputValues = {
        title: titre.value,
        imageUrl: photoUpload.files[0],
        categoryId: cat.selectedOptions[0].getAttribute("data-id"),
    }
    const formBodyValue = JSON.stringify(formInputValues)
    console.log(formInputValues)

    fetch("http://localhost:5678/api/works", {
                method: "POST",
                headers: { "Authorization" : `Bearer ${token}` },
                body: formBodyValue,
            })
            .then(res => {
                console.log(res)
            })
})