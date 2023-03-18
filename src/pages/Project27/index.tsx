import { useState } from "react";
import { ContainerProject27, Toast } from "./styles";

type ToastType = 'success'|'error'|'warning';

interface ToastProps{
  id:string;
  type:ToastType;
  message:string; 
}

export function Project27(){
  const [toastsOpen,setToastsOpen] = useState<ToastProps[]>([])

  function generateRandomToastType():ToastType{
    const number = Math.floor(Math.random() * 3)

    return number === 0 ? 'success' : number === 1 ? 'warning' : 'error';
  }

  function handleCreateToast(){
    const id = String(new Date().getTime())
    const toastType = generateRandomToastType()
    setToastsOpen(state=>[...state,{id,type:toastType,message:toastType}])

    setTimeout(()=>{
      setToastsOpen(state=>[...state.filter(toast=>toast.id!==id)])
    },4000)
  }

  return (
    <ContainerProject27>
      <button type="button" onClick={handleCreateToast}>Show Notification</button>
      {
        toastsOpen.map((toast,index)=>(
          <Toast type={toast.type} key={toast.id} index={index}>
            <span>{toast.message}</span>
          </Toast>
        ))
      }
    </ContainerProject27>
  )
}