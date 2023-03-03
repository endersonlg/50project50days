import { useEffect, useState } from "react";
import { sleep } from "../../util/sleep";
import { ContainerProject13,Option } from "./styles";

export function Project13(){
  const [text,setText] = useState<string>()
  const [options,setOptions] = useState<string[]>()
  const [optionSelected,setOptionSelected] = useState<number|undefined>()

  useEffect(()=>{
    if(text?.length){
      const textSepared = text.split(',')
      const words = [];
      for(let word of textSepared){
        if(word.length){
          words.push(word)
        }
      }
      setOptions(words)
    }
  },[text])
  


  async function selectedOne(){
    let quantity = options?.length;
    if(quantity){
      console.log('quantity', quantity);
      let i = 0;
      while(i<(quantity * 5)){
        await sleep(100);
        setOptionSelected(Math.floor(Math.random() * quantity));
        i++;
      }
      setText('')
    }
  }

  function handleText(textAux:string):void{
    if(optionSelected){
      setOptionSelected(undefined);
      setOptions([])
    }
    setText(textAux.trim());
  }

  return (
    <ContainerProject13>
      <div>
        <h3>
          Enter all of the choices divided by a comma (','). 
          <br />
          Press enter when you're done
        </h3>
        <textarea 
          placeholder="Enter choices here..." 
          onChange={(e)=>handleText(e.target.value)}
          onKeyDown={e=>e.code==='Enter'&&!optionSelected&&selectedOne()}
          value={text}
        />
        <div>
          {
            options?.map((option,index)=>(
              <Option selected={optionSelected===index}>{option}</Option>
            ))
          }
        </div>
      </div>
    </ContainerProject13>

  )
}