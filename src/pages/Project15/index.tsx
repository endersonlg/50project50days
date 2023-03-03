import { FacebookLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { sleep } from "../../util/sleep";
import { ContainerProject15 } from "./styles";

export function Project15(){
  const [twitter,setTwitter] = useState(0)
  const [youtube,setYoutube] = useState(0)
  const [facebook,setFacebook] = useState(0)

  useEffect(()=>{
    (async ()=>{
      for(let i=0; i<=200;i++){
        setTwitter(i*60);
        setYoutube(i*25);
        setFacebook(Math.ceil(i*37.5));
        await sleep(1);
      }
    })();

    // (async ()=>{
    //   for(let i=0; i<=5000;i+=2){
    //     setYoutube(i);
    //     await sleep(1);
    //   }
    // })();

    // (async ()=>{
    //   for(let i=0; i<=7500;i+=3){
    //     setFacebook(i);
    //     await sleep(1);
    //   }
    // })()

  },[])

  return (
    <ContainerProject15>
      <div>
        <div>
          <TwitterLogo size={64} weight="fill"/>
          <h3>{twitter}</h3>
          <span>Twitter Followers</span>
        </div>
        <div>
          <YoutubeLogo size={64} weight="fill"/>
          <h3>{youtube}</h3>
          <span>YouTube Subscribers</span>
        </div>
        <div>
          <FacebookLogo size={64} weight="fill"/>
          <h3>{facebook}</h3>
          <span>Facebook Fans</span>
        </div>
      </div>
    </ContainerProject15>
  )
}