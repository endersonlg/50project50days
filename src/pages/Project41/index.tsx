import  { useRef, useState } from "react";
import { ContainerProject41, InputNumber } from "./styles";
import { sleep } from "../../util/sleep";

export function Project41(){
  const [allValue,setAllValue] = useState<(number|null)[]>([null,null,null,null,null,null])

  const input1 = useRef<HTMLInputElement | null>(null)
  const input2 = useRef<HTMLInputElement | null>(null)
  const input3 = useRef<HTMLInputElement | null>(null)
  const input4 = useRef<HTMLInputElement | null>(null)
  const input5 = useRef<HTMLInputElement | null>(null)
  const input6 = useRef<HTMLInputElement | null>(null)

 async function handleSetValue(value:string,index:number){
    if(value === 'Backspace'){
      await new Promise((resolve, reject) =>{
        setTimeout(() => {
          setAllValue((state)=>{
            const aux = [...state];
            aux.splice(index, 1, null)
            return aux;
          })
          resolve(true)
        }, 50)
      })
   

      switch(index){
        case 1: input1.current?.focus(); break;
        case 2: input2.current?.focus(); break;
        case 3: input3.current?.focus(); break;
        case 4: input4.current?.focus(); break;
        case 5: input5.current?.focus(); break;
      }
    }else if(Number(value) >= 0 || Number(value) <= 9){
      await new Promise((resolve, reject) =>{
        setTimeout(() => {
          setAllValue((state)=>{
            const aux = [...state];
            aux.splice(index, 1, Number(value))
            return aux;
          })
          resolve(true)
        }, 50)
      })
      switch(index){
        case 0: input2.current?.focus(); break;
        case 1: input3.current?.focus(); break;
        case 2: input4.current?.focus(); break;
        case 3: input5.current?.focus(); break;
        case 4: input6.current?.focus(); break;
      }
    }
  }

  console.log(allValue)

  return (
    <ContainerProject41>
      <div>
        <h2>Verify your account</h2>

        <p>
          We emailed you the six digit code to cool_guy@email.com
          <br/>
          Enter the code below to confirm your email address.
        </p>

        <div>
          <InputNumber
              hasValue={!!allValue[0]}
              placeholder="0"
              min={0}
              max={9}
              ref={input1}
              onKeyDown={(e)=>handleSetValue(e.key,0)}
              value={allValue[0]||''}
          />
          <InputNumber
              hasValue={!!allValue[1]}
              placeholder="0"
              min={0}
              max={9}
              ref={input2}
              onKeyDown={(e)=>handleSetValue(e.key,1)}
              value={allValue[1]||''} 
          />
          <InputNumber
              hasValue={!!allValue[2]}
              placeholder="0"
              min={0}
              max={9}
              ref={input3}
              onKeyDown={(e)=>handleSetValue(e.key,2)}     
              value={allValue[2]||''} 
          />
          <InputNumber
              hasValue={!!allValue[3]}
              placeholder="0"
              min={0}
              max={9}
              ref={input4}
              onKeyDown={(e)=>handleSetValue(e.key,3)}
              value={allValue[3]||''} 
          />
          <InputNumber
              hasValue={!!allValue[4]}
              placeholder="0"
              min={0}
              max={9}
              ref={input5}
              onKeyDown={(e)=>handleSetValue(e.key,4)}
              value={allValue[4]||''} 
          />
          <InputNumber
              hasValue={!!allValue[5]}
              placeholder="0"
              min={0}
              max={9}
              ref={input6}
              onKeyDown={(e)=>handleSetValue(e.key,5)}
              value={allValue[5]||''} 
          />
        </div>

        <small>This is design only. We didn't actually send you an email as we don't have your email, right?</small>
      </div>
    </ContainerProject41>
  )
}