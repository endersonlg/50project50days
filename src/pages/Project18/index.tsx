import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useState } from "react";
import { ContainerProject18, IMG } from "./styles";

const images = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
  'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
]

export function Project18(){
  const [indexImage,setIndexImage] = useState(0)

  function changeImage(next:boolean){
    if(next){
      if(indexImage + 1 >= images.length){
        setIndexImage(0)
      }else{
        setIndexImage(indexImage + 1)
      }
    }else{
      if(indexImage - 1 < 0){
        setIndexImage(images.length - 1);
      }else{
        setIndexImage(indexImage - 1)
      }
    }
  }

  return (
    <ContainerProject18 image={images[indexImage]}>
      <button><ArrowLeft size={48} weight="bold" onClick={()=>changeImage(false)}/></button>
      <div>
        <IMG src={images[0]} selected={indexImage === 0 }/>
        <IMG src={images[1]} selected={indexImage === 1 }/>
        <IMG src={images[2]} selected={indexImage === 2 }/>
        <IMG src={images[3]} selected={indexImage === 3 }/>
        <IMG src={images[4]} selected={indexImage === 4 }/>
      </div>
      <button><ArrowRight size={48} weight="bold" onClick={()=>changeImage(true)}/></button>
    </ContainerProject18>
  )
}