import { useState,useEffect } from "react";
import { ContainerProject30 } from "./styles";

const message = "We Love Programming!"

export function Project30(){
  const [value,setValue] = useState(1);
  const [text,setText] = useState<string>('')

  useEffect(()=>{
    const id = setInterval(()=>{
      setText((state) => {
        if(state.length < message.length){
          return message.substring(0,state.length + 1);
        }
        return ''
      })
    },500 / value)

    return ()=>clearInterval(id)
  },[value])
  
  return (
    <ContainerProject30>
      <span>{text}</span>
      <div>
        <label>Speed:</label>
        <input type="number" min={1} max={10} onChange={e=>setValue(Number(e.target.value))} value={value}/>
      </div>
    </ContainerProject30>
  )
}