import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
import uuid from "react-uuid"

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [activeNote, setActiveNote] = useState(false)

  useEffect(() => {
    // ローカルストレージにノートを保存する
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    // リロードした時、1番目のノートが選択されるようにする
    setActiveNote(notes[0].id)
  }, [notes])

  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      // ランダムなidを設定
      id: uuid(),
      title:"Title",
      text:"",
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

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  const onUpdateNote = (updatedNote) => {
    // 修正されたノートの配列を返す
    const updatedNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id) {
        return updatedNote
      } else {
        return note
      }
    })
    setNotes(updatedNotesArray)
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
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
      </div>
    </>
  )
}

export default App