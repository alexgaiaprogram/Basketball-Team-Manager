// LOGIN
function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, pass)
        .then(() => {
            window.location.href = "index.html";
        })
        .catch(err => alert("Error: " + err.message));
}

// REGISTRO
function register() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, pass)
        .then(cred => {
            const uid = cred.user.uid;

            // Documento inicial del usuario
            return db.collection("users").doc(uid).set({
                email: email,
                nombre: "",
                club: null,
                rolGlobal: "ninguno",
                rolClub: "ninguno"
            });
        })
        .then(() => {
            alert("Cuenta creada. Ahora inicia sesión.");
        })
        .catch(err => alert("Error: " + err.message));
}
