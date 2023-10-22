
function Usuari(nom, cognom, edat) {
    this.nom = nom;
    this.cognom = cognom;
    this.edat = edat;
}

    function obtenerInformacion() {
        var name= prompt("Introdueix el teu nom:");
        var surname = prompt("Introdueix el teu cognom:");
        var age = prompt("Introdueix la teva edat:");
        
      
       
        usuario = new Usuari(name, surname, age);
        
        
        
        alert("Informació de l'usuari guardada.");
    }

    function mostrarInfo() {
        var infoContainer = document.getElementById("infoContainer");
        if (usuario) {
            infoContainer.innerHTML = " Aquesta és la teva informació: <li>Nom: " + usuario.nom + "<li>Cognom: " + usuario.cognom + "<li>Edat: " + usuario.edat;
        } else {
            infoContainer.innerHTML = "No s'ha guardat la informació.";
        }
    }

  
    var btnGuardar = document.getElementById("btnGuardar");
    var btnMostrar = document.getElementById("btnMostrar");

    btnGuardar.addEventListener("click", obtenerInformacion);
    btnMostrar.addEventListener("click", mostrarInformacion);

