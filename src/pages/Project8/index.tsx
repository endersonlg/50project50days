import { Link } from "react-router-dom";
import { ContainerProject8 } from "./styles";


export function Project8(){
  return (
    <ContainerProject8>
      <form>
        <h1>Please Login</h1>
        <div tabIndex={0}>
          <input type="email" id="input-email"/>
          <label htmlFor="input-email">
            <span>E</span>
            <span>m</span>
            <span>a</span>
            <span>i</span>
            <span>l</span>
          </label>
        </div>
        <div tabIndex={0}>
          <input type="email" id="input-password"/>
          <label htmlFor="input-password">
            <span>P</span>
            <span>a</span>
            <span>s</span>
            <span>s</span>
            <span>w</span>
            <span>o</span>
            <span>r</span>
            <span>d</span>
          </label>
        </div>
        <button type="submit">Login</button>
        <span>Don't have an account? <Link to="#">Register</Link></span>
      </form>
    </ContainerProject8>
  )
}