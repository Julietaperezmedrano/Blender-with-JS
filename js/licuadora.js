var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() { //se va a fijar en que estado está la licuadora y lo va a cambiar
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        //console.log("Me prendiste");
        licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagada";
        hacerBrrBrr();
        licuadora.classList.remove("active");
        //console.log("Me apagaste");
    }
}

function hacerBrrBrr() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}