import { useState } from "react";
import { BackgroundImage, ContainerProject39, ContentInput } from "./styles";

export function Project39(){
  const [password,setPassword] = useState('')

  return(
    <ContainerProject39 >
      <BackgroundImage passwordStrength={password.length}/>
      <form>
        <h1>Image Password strength</h1>
        <span>Change the password to see effect</span>
        <ContentInput>
          <label>Email:</label>
          <input type="email"/>
        </ContentInput>

        <ContentInput>
          <label>Password:</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </ContentInput>

        <button type="submit">Submit</button>
      </form>
    </ContainerProject39>
  )
}