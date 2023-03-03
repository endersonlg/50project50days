import { ContainerProject9 } from "./styles";


//@ts-ignore
import applause from './sounds/applause.mp3'
//@ts-ignore
import boo from './sounds/boo.mp3'
//@ts-ignore
import gasp from './sounds/gasp.mp3'
//@ts-ignore
import tada from './sounds/tada.mp3'
//@ts-ignore
import victory from './sounds/victory.mp3'
//@ts-ignore
import wrong from './sounds/wrong.mp3'

const soundApplause = new Audio(applause)
const soundBoo = new Audio(boo)
const soundGasp = new Audio(gasp)
const soundTada = new Audio(tada)
const soundVictory = new Audio(victory)
const soundWrong = new Audio(wrong)

type sound = 'applause'|'boo'|'gasp'|'tada'|'victory'|'wrong'

export function Project9(){

  function playAudio(sound:sound){
    switch(sound){
      case 'applause': soundApplause.play();
        break;
      case 'boo': soundBoo.play();
        break;
      case 'gasp': soundGasp.play();
        break;
      case 'tada': soundTada.play();
        break;
      case 'victory': soundVictory.play();
        break;
      case 'wrong': soundWrong.play();
        break;
    }
  }

  return (
    <ContainerProject9>
      <div>
        <button type="button" onClick={()=>playAudio('applause')}>applause</button>
        <button type="button" onClick={()=>playAudio('boo')}>boo</button>
        <button type="button" onClick={()=>playAudio('gasp')}>gasp</button>
        <button type="button" onClick={()=>playAudio('tada')}>tada</button>
        <button type="button" onClick={()=>playAudio('victory')}>victory</button>
        <button type="button" onClick={()=>playAudio('wrong')}>wrong</button>
      </div>
    </ContainerProject9>
  )
}