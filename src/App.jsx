import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

export const App = () => {
  return (
    <>
      <div className="container4">
        <BrowserRouter>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/page1'>Page1</Link>
          <br />
          <Link to='/page2'>Page2</Link>
          <br />
          <Router />
        </BrowserRouter>
      </div>
    </>
  )
}