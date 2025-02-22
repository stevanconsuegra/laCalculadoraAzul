import React, { useState } from "react";
import Boton from "./boton.jsx";
import "../styles/App.css";
import Pantalla from "./pantalla.jsx";

function App() {
    const [operacion, setOperacion] = useState("");

    // Función para actualizar la pantalla con los caracteres ingresados
    const agregarCaracter = (caracter) => {
        if (caracter === "AC") {
            setOperacion(""); // Limpiar la operación
        } else if (caracter === "=") {
            calcularResultado(); // Evaluar la operación
        } else if (caracter === "⌫") { // Borrar un carácter
            setOperacion(operacion.slice(0, -1));
        } else {
            setOperacion(operacion + caracter);
        }
    };

    // Función para evaluar la operación ingresada
    const calcularResultado = () => {
        try {
            setOperacion(eval(operacion).toString()); // Evalúa y convierte a string
        } catch (error) {
            setOperacion("Error"); // Muestra "Error" si la expresión es inválida
        }
    };

    return (
        <div className="App">
            <h1>Calculadora</h1>
            <div className="contenedor">
                <Pantalla entrada={operacion} />
                <div className="fila">
                    <Boton hacerClic={agregarCaracter}>(</Boton>
                    <Boton hacerClic={agregarCaracter}>)</Boton>
                    <Boton hacerClic={agregarCaracter}>⌫</Boton>
                    <Boton hacerClic={agregarCaracter}>/</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClic={agregarCaracter}>7</Boton>
                    <Boton hacerClic={agregarCaracter}>8</Boton>
                    <Boton hacerClic={agregarCaracter}>9</Boton>
                    <Boton hacerClic={agregarCaracter}>*</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClic={agregarCaracter}>4</Boton>
                    <Boton hacerClic={agregarCaracter}>5</Boton>
                    <Boton hacerClic={agregarCaracter}>6</Boton>
                    <Boton hacerClic={agregarCaracter}>-</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClic={agregarCaracter}>1</Boton>
                    <Boton hacerClic={agregarCaracter}>2</Boton>
                    <Boton hacerClic={agregarCaracter}>3</Boton>
                    <Boton hacerClic={agregarCaracter}>+</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClic={agregarCaracter}>AC</Boton>
                    <Boton hacerClic={agregarCaracter}>0</Boton>
                    <Boton hacerClic={agregarCaracter}>.</Boton>
                    <Boton hacerClic={agregarCaracter}>=</Boton>
                </div>
            </div>
        </div>
    );
}

export default App;