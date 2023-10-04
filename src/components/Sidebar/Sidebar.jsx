import React from 'react'
import "./Sidebar.css"

const Sidebar = ({
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote
}) => {

  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate)

  return (
    <div className='app-sidebar'>
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {/* map関数でnoteの要素を取り出してやる */}
        {sortedNotes.map((note) => (
          <div 
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}>
            <div className="sidebar-note-title">
              <strong>
                {note.title}
              </strong>
              {/* 押したときはアロー関数で記述する(引数を取る場合)*/}
              <button onClick={() => onDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.text}</p>
            {/* 日本時間で表示 */}
            <small>{new Date(note.modDate).toLocaleDateString("ja-JP", {
              hour: "2-digit",
              minute: "2-digit"
            })}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar