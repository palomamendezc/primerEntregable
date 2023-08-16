import React from "react";
import Card from "./Card";
import { useState } from "react";

const Form = () => {
    const[nombre, setNombre] = useState ("");
    const[color, setColor] = useState ("");
    const[validacion, setValidacion] = useState ("");
    const[card, setCard] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre);
        console.log(color);

        let validarTresCaracteres = false;
        let validarSeisCaracteres = false;

        if (nombre.trim().length >= 3) {
            validarTresCaracteres = true;
            console.log("es mayor a tres caracteres");
        } else{
            validarTresCaracteres = false;
            console.log("es menor a tres caracteres");
        }; 
        if (color.trim().length >= 6) {
            validarSeisCaracteres = true;
            console.log("es mayor a seis caracteres");
        } else{
            validarSeisCaracteres = false;
            console.log("es menor a seis caracteres");
        };
        if (validarTresCaracteres === true && validarSeisCaracteres === true) {
            setValidacion(false);
            setCard(true);
        } else {
            setValidacion(true);
            setCard(false);
        }
    };

    return(
    <div>
        <form className="Form" id = 'Form' onSubmit={ handleSubmit }>
            <input type = {"text"} placeholder = {"Ingresa tu nombre"} value={nombre} onChange={(e) => setNombre (e.target.value)}>
            </input>
            <input type = {"text"} placeholder = {"Ingresa tu color favorito"} value={color} onChange={(e) => setColor (e.target.value)}>
                
            </input>
        </form>
        <br></br>
        <div>
            <button form = "Form" btn = "submit">
                Enviar
            </button>
        </div>
        <div>
        {
            validacion && (<p> Porfavor chequea que la informacion sea correcta </p>)

        }
        {
            card && (<Card name = {nombre} colors = {color}/>)
        }
        </div>
        
    </div>
    )

}

export default Form;