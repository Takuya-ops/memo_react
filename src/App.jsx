import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
import uuid from "react-uuid"

function App() {
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false)
  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      // ランダムなidを設定
      id: uuid(),
      title:"新しいノート",
      text:"新しいノートの内容",
      modDate: Date.now(),
    };
    // ...（スプレット構文）で書かないと２つ目以降の要素が追加されない
    setNotes([...notes, newNote])
    console.log(notes)
  }

  const onDeleteNote = (id) => {
    // idが違うものを残す（一致するものは削除する）
    const filterNotes = notes.filter((note) => note.id !== id)
    setNotes(filterNotes)
  }

  return (
    <>
      <div className="App">
        <Sidebar
          onAddNote={onAddNote}
          notes={notes}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main/>
      </div>
    </>
  )
}

export default App