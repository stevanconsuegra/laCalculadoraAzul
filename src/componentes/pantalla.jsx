import React from "react";
import "../styles/pantalla.css"
function Pantalla({entrada}) {
    return(
        <div className="pantalla">
            {entrada}
        </div>
    );
}
export default Pantalla;