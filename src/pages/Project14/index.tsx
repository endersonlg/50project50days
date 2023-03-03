/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Button, ContainerProject14 } from './styles';

export function Project14(){
  const [isOpen,setIsOpen] = useState(false)

  return(
    <ContainerProject14 isOpen={isOpen}>
      <div>
        <nav>
          <ul>
            <li>
              <a href='#'>Home</a></li>
            <li>
             <a href='#'>Works</a></li>
            <li>
             <a href='#'>About</a></li>
            <li>
             <a href='#'>Contact</a></li>
          </ul>
        </nav>
        <Button type='button' isOpen={isOpen} onClick={()=>setIsOpen(!isOpen)}>
          <div/>
          <div/>
        </Button>
      </div>
    </ContainerProject14>
  )
}