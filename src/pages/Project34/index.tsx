import { useEffect, useState } from "react";
import { sleep } from "../../util/sleep";
import { ContainerProject34, Count } from "./styles";

export function Project34(){
  const [numberShow,setNumberShow] = useState<number>(3)
  const [loading,setLoading] = useState<boolean>(true)

  useEffect(()=>{
    (async()=>{
      if(loading){
        let i = 4;
        while(i>=0){
          i--;
          setNumberShow(i)
          await sleep(1000);
          if(i===0){
            setLoading(false)
          }
        }
      }
    })()
  },[loading])
  
  return (
    <ContainerProject34>
      {
        loading ? (
          <>
            <div>
              <Count isVisible={numberShow===0}>0</Count>
              <Count isVisible={numberShow===1}>1</Count>
              <Count isVisible={numberShow===2}>2</Count>
              <Count isVisible={numberShow===3}>3</Count>
            </div>
            <h3>GET READY</h3>
          </>
        ):(
          <div>
            <h2>GO</h2>
            <button type="button" onClick={()=>setLoading(true)}>Replay</button>
          </div>
        )
      }
    

    </ContainerProject34>
  )
}