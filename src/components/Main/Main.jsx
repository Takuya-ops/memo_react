import React from 'react'
import "./Main.css"
import Markdown from 'react-markdown'

const Main = ({ activeNote, onUpdateNote }) => {

  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    })

  }
  // activenoteが存在しない時
  if(!activeNote) {
    return <div className='no-active-note'>ノートが選択されていません</div>
  }
  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        <input
          id="title"
          type="text"
          placeholder='タイトル'
          value={activeNote.title}
          onChange={(e) => {onEditNote("title", e.target.value)
        }}/>
        <textarea
          id="text"
          placeholder='ノート内容を記入'
          value={activeNote.text}
          onChange={(e) => onEditNote("text", e.target.value)}>
        </textarea>
      </div>
      <div className='app-main-note-preview'>
        <h1 className='preview-title'>{activeNote.title}</h1>
        <Markdown className='markdown-preview'>
          {activeNote.text}
        </Markdown>
      </div>
    </div>
  )
}

export default Main