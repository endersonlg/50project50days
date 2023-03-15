import { useEffect, useState } from "react";
import { Card, CardLoading, ContainerProject24, Profile, Skeleton } from "./styles";

export function Project24(){
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 3000);  
  },[]);

  if(loading){
    return (
      <ContainerProject24>
        <CardLoading>
          <Skeleton width={'350px'} height={'200px'}/>
          <div>
            <Skeleton height={'18px'}/>
            <Skeleton height={'18px'}/>
            <Skeleton height={'18px'}/>
            <div>
              <Skeleton width={'40px'} height={'40px'}/>
              <div>
                <Skeleton height={'14px'}/>
                <Skeleton height={'10px'}/>
              </div>
            </div>
          </div>
        </CardLoading>
      </ContainerProject24>
    )
  }
  
  return (
    <ContainerProject24>
      <Card>
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""/>      
        <div>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis</p>
          <Profile>
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt=""/>
            <div>
              <strong>John Doe</strong>
              <span>Oct 08,2020</span>
            </div>
          </Profile>
        </div>
      </Card>

    </ContainerProject24>
  )
}