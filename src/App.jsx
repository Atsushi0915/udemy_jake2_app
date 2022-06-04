import React,{useState, useCallback} from 'react'
import { ChildAria } from './CildAria';

export const App = () => {

  const[text, setText] = useState('')
  const[open, setOpen] = useState(false)

  const onChangeText = (event) => setText(event.target.value)

  const onClickOpen = () => setOpen(true)

  const onClickClose = useCallback(() => setOpen(false), [setOpen])

  
  return (
    <div>
      <h1> React Start</h1>
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildAria open={open} onClickClose={onClickClose}/>
    </div>
  );
}


