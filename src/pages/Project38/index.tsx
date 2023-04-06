import { BookOpen, House, Package, UsersThree } from "phosphor-react";
import { ContainerProject38, Image, Navigation, Phone } from "./styles";
import { useState } from "react";


      
export function Project38(){
  const [imageSelected,setImageSelected] = useState(0)

  function handleSelectImage(index: number){
    setImageSelected(index)
  }

  return (
    <ContainerProject38>
      <Phone>
        <Image isSelected={imageSelected===0} src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="home" />
        <Image isSelected={imageSelected===1} src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="work" />
        <Image isSelected={imageSelected===2} src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80" alt="blog" />
        <Image isSelected={imageSelected===3} src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="about" />
      
        <Navigation>
          <ul>
            <li>
              <button type="button" onClick={()=>handleSelectImage(0)}>
                <House size={24} weight="fill" />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button type="button" onClick={()=>handleSelectImage(1)}>
                  <Package size={24} weight="fill" />
                  <span>Work</span>
                </button>
            </li>
            <li>
              <button type="button" onClick={()=>handleSelectImage(2)}>
                  <BookOpen size={24} weight="fill" />
                  <span>Blog</span>
                </button>
            </li>
            <li>
                <button type="button" onClick={()=>handleSelectImage(3)}>
                  <UsersThree size={24} weight="fill" />
                  <span>About Us</span>
                </button>
            </li>
          </ul>
        </Navigation>
      </Phone>
    </ContainerProject38>
  )
}