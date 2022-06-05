import { Routes, Route } from "react-router-dom"
import { Home } from "../Home"
import { Page1 } from "../Page1"
import { Page1DetailA } from "../Page1DetailA"
import { Page1DetailB } from "../Page1DetailB"
import { Page2 } from "../Page2"
import { Page404 } from "../Page404"
import { UrlParamater } from "../UrlParamater"

export const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exavt path='/page1' element={ <Page1 />} >
          <Route exact path='detailA' element={<Page1DetailA />} />   
          <Route exact path='detailB' element={<Page1DetailB />} />
        </Route>
        <Route exact path='/page2' element={<Page2 />}>
          <Route exact path=':id' element={<UrlParamater />} />
        </Route>
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </>
  )
} 