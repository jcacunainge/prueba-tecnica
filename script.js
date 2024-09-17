
document.getElementById("consultarBtn").addEventListener("click", buscarNumeros);

function buscarNumeros() {

    // Obtener valores desde los inputs con el manejo del DOM
    const tamañoLista = parseInt(document.getElementById("tamañoLista").value);
    const listaNumeros = document.getElementById("listaNumeros").value
                            .split(' ')
                            .map(Number);
    const numConsultas = parseInt(document.getElementById("numConsultas").value);
    const consultas = document.getElementById("consultas").value
                        .split(' ')
                        .map(Number);
    
    // inputs reueridoss
    if (isNaN(tamañoLista) || !listaNumeros.length || isNaN(numConsultas) || !consultas.length) {
        alert("Por favor, ingresa todos los valores solicitados.");
        return;
    }

    let resultadoHTML = "";

    // Lógica para calcular los resultados
    consultas.forEach((numero) => {
        let menor = 'X'; 
        let mayor = 'X'; 

        for (let i = 0; i < listaNumeros.length; i++) {
            if (listaNumeros[i] < numero) {
                menor = listaNumeros[i]; 
            } else if (listaNumeros[i] > numero) {
                mayor = listaNumeros[i]; o
                break; 
            }
        }

        resultadoHTML += `${menor} ${mayor}<br>`;
    });

    document.getElementById("resultados").innerHTML = resultadoHTML;
}
