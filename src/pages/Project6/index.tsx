import { useCallback, useEffect, useMemo, useState } from 'react';
import { Card, ContainerProject6 } from './styles';

export function Project6(){
  const [scroll,setScroll] = useState(0);
  const [height,setHeight] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log(scroll)
  
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const estaVisivel = (index:number):boolean =>{
    const card = document.querySelector(`#card-${index}`)
    if(!card){
      return false
    }
    var posicao = card.getBoundingClientRect();
    console.log('posicao ',index,posicao)
    var alturaJanela = height  ;
    console.log(height)
    return (posicao.top >= 0 && posicao.bottom <= alturaJanela);
  }

  return (
    <ContainerProject6 >
      <h1>Scroll to see the animation</h1>

      {
        Array.from({length:24},(_,index)=>(
          <Card key={`card-${index}`} id={`card-${index}`}  show={estaVisivel(index)}>
            Content
          </Card>
        ))
      }
    </ContainerProject6>
  )
}