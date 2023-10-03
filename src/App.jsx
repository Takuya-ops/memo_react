import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [notes, setNotes] = useState([])
  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote = {
      id:1,
      title:"新しいノート",
      text:"新しいノートの内容",
      modDate: Date.now(),
    };
    // ...（スプレット構文）で書かないと２つ目以降の要素が追加されない
    setNotes([...notes, newNote])
    console.log(notes)
  }

  return (
    <>
      <div className="App">
        <Sidebar onAddNote={onAddNote} notes={notes} />
        <Main/>
      </div>
    </>
  )
}

export default App