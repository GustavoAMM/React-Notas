export function Boton({text}){
    return <button onClick={function(){
        console.log("Hola mundo")
    }}>{text}</button>
}