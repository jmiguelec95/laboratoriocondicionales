import "./style.css";

/*type ESTADOS =
    | "MENORQUECINCO"
    | "CINCO"
    | "ENTRESEISYSIETE"
    | "MAYORQUESIETE";
*/
let puntuacion: number = 0;
let carta: number = 0;   

const actualizarEstado = () => {
    if (puntuacion < 5) {
        return "MENORQUECINCO";
    } else if (puntuacion === 5) {
        return "CINCO";
    } else if (puntuacion > 5 && puntuacion <= 7) {
        return "ENTRESEISYSIETE";
    } else {
        return "MAYORQUESIETE";
    }
};


const actualizarPuntuacion = () => {
    let valor_carta: number = 0
    if (carta > 7) {
        valor_carta = 0.5;
    } 
    else {
        valor_carta = carta;
    }
    puntuacion += valor_carta;
    actualizarEstado();
};

const renderizarCarta = () => {
    const img_carta = document.getElementById("carta");
    if (img_carta !== null && img_carta !==undefined && img_carta instanceof HTMLImageElement) {
    img_carta.src = `/src/assets/carta${carta}.jpg`;
    }
}

const nuevaCarta = () => {
    carta = Math.floor(Math.random() * 10) + 1;
    if (carta > 7) {
        carta = carta + 2;
    }
    actualizarPuntuacion();
    renderizarCarta();
}

const botonpedircarta = document.getElementById("pedir_carta");
if (botonpedircarta !== null && botonpedircarta !== undefined) {
    botonpedircarta.addEventListener("click", nuevaCarta);
}
