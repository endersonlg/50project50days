import { NotePencil, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { ContainerProject33, Note } from "./styles";

interface NoteProps{
  text:string,
  isEditing: boolean;
}

export function Project33(){
  const [notes,setNotes] = useState<NoteProps[]>([])

  function handleAddNote():void{
    setNotes(states=>[...states,{
      isEditing:true,
      text:''
    }])
  }

  function handleDeleteNote(index:number):void{
    const auxNotes = [...notes]
    auxNotes.splice(index,1)
    setNotes(auxNotes)
  }

  function handleWriteOnNode(text:string,index:number):void{
    if(notes[index] && notes[index].isEditing){
      const auxNotes = [...notes]
      auxNotes.splice(index,1,{
        text,
        isEditing:true
      })
      setNotes(auxNotes)
    }
  }

  function handleEdit(index:number):void{
    if(notes[index] && notes[index].isEditing){
      console.log('1')
      const auxNotes = [...notes]
      auxNotes.splice(index,1,{
        text:notes[index].text,
        isEditing:false
      })
      setNotes(auxNotes)
    }else{
      console.log('2')
      const auxNotes = [...notes]
      auxNotes.splice(index,1,{
        text:notes[index].text,
        isEditing:true
      })
      setNotes(auxNotes)
    }
  }

  console.log(notes)

  return (
    <ContainerProject33>
      <button type="button" onClick={handleAddNote}>
        <Plus size={16} weight="bold" />
        Add Note
      </button>
      <div>
        {
          notes.map((note,index)=>(
            <Note key={`node-${index.toString()}`}>
              <div>
                <button type="button" onClick={()=>handleEdit(index)}>
                  <NotePencil size={16} weight="bold" />
                </button>
                
                <button type="button" onClick={()=>handleDeleteNote(index)}>
                  <Trash size={16} weight="bold" />
                </button>

              </div>
              <textarea onChange={(e)=>handleWriteOnNode(e.target.value,index)} value={note.text}/>
            </Note>  
          ))
        }
     
      </div>

    </ContainerProject33>
  )
}