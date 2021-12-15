
/* eslint no-eval: 0*/
//importacion
import React, { useState } from "react";
import Result from "./components/Result";
import MathOperation from "./components/MathOperation";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import './App.css';


//generar la funcion del componente 
//Arrow function
const App = () => {
    //Array destructuring
    //1ra posición : valor(que inicialmente es el valor por defecto)
    //2da posición : funcion que va a permitir modificar el valor por defecto

    const [stack , setStack] = useState("");
let  items = stack.split(/[-,+,*,/]+/g);
    if(items[0] === ""){
        items[0] = '0';
    }
    console.log(items);
    //Lo que ejecuta la función
    console.log("Renderización de App");
    // const clickHandlerFunction = text =>{
    //     console.log("clickHandler",text);
    // }
    return (
        <main className="react-calculator">
            <Result value={items.length > 0 ? items[items.length - 1] : "0"} />
            <Numbers onClickNumber={number => {
                console.log(number);
                setStack(`${stack}${number}`);
            }} />
            <Functions onContentClear={c => {
                setStack('');
                console.log(c);
            }}
                onDelete={r => {
                    if(stack.length > 0){
                        let newStack = stack.substring(0, stack.length-1);
                        setStack(newStack);
                        console.log(r);
                    }                
                }}
            />

            <MathOperation onClickOperation={operation => {
                setStack(`${stack}${operation}`);
                console.log(operation);
            }}
                onclickEqual={equal => {
                    setStack(eval(stack).toString());
                    console.log(equal)
                }}
            />


        </main>
    );
}

//exportacion
export default App;