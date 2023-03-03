import { useState } from "react";
import { BigCup, ContainerProject16, ContentSmallCup, SmallCup } from "./styles";

export function Project16(){
  const [quantity,setQuantity] = useState(0);

  function handleSelectQuantity(value: number):void{
    if(value===quantity){
      setQuantity(value - 1);
      return;
    }
    setQuantity(value);

  }

  return (
    <ContainerProject16>
      <div>
        <h1>Drink Water</h1>
        <h3>Goal: 2Liters</h3>

        <BigCup quantity={quantity}>
          <div>
            <span>{2-(0.25 * quantity)}L</span>
            <small>Remained</small>
          </div>
          <div>
            <span>{12.5 * quantity}%</span>
          </div>
        </BigCup>

        <p>
          Select how many glasses of water that you have drank
        </p>
        <ContentSmallCup>
          {
            Array.from({length:8},(_,index)=>(
              <SmallCup 
                type="button" 
                key={`small-cup-${index.toString()}`} 
                fill={index+1<=quantity}
                onClick={()=>handleSelectQuantity(index+1)}
              >
                250 ml
              </SmallCup>
            ))
          }
        </ContentSmallCup>
      </div>
    </ContainerProject16>
  )
}