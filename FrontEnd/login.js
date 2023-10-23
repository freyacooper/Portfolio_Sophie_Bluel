
function ajoutListenerLogin() {
    const formLogin = document.querySelector("#login form")
    formLogin.addEventListener("submit", async (event) => {
        event.preventDefault()

        const userLogin = {
            email: event.target.querySelector("[name=email]").value,
            password: event.target.querySelector("[name=password]").value,
        }
        const userBodyValue = JSON.stringify(userLogin)
        
        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: userBodyValue,
        })
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))
        
        
       
    })
}

ajoutListenerLogin()
