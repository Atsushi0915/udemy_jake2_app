import { memo } from "react";


export const ChildAria = memo((props) => {
  // console.log(props)
  
  const { open, onClickClose } = props

  console.log("ChildAriaがレンダリングされた!")

  const data = [...Array(2000).keys()];

  data.forEach(() => {
    console.log("...")
  })

  return (
    <>
      <div className="alert alert-primary">
        {console.log(open)}
        {open === true &&
        <div>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
        }
        
      </div>
    </>
  )
})