import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Clock, ContainerProject19 } from "./styles";

export function Project19(){
  const [time,setTime] = useState(new Date());
  const [darkModeActive,setDarkModeActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  return (
    <ContainerProject19 darkMode={darkModeActive}>
      <div>
        <button onClick={()=>setDarkModeActive(!darkModeActive)}>Dark Mode</button>
        <div>
          <Clock seconds={seconds} minutes={minutes} hours={hours > 12 ? hours - 12 : hours} darkMode={darkModeActive}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
          </Clock>
          <h4>{`${hours}:${minutes.toString().padStart(2,'0')} ${hours > 12 ? 'PM' : 'AM'}`}</h4>
          <p>{format(time,'EEEE')}, {format(time,'MMM')} <span>{format(time,'II')}</span></p>
        </div>
      </div>
    </ContainerProject19>
  )
}