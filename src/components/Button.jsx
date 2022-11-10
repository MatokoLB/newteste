import { useState } from 'react'

function Button (){
    const [numero,setNumero] = useState(0);
   
    const mudaNumero = () =>{
    setNumero(numero + 1)
   }

return (
    <div>
       <button onClick={mudaNumero}>+</button>    
       <p>{numero}</p>
       <button onClick={()=> setNumero(numero -1)}>-</button>    
    </div>
   
)
}

export default Button;