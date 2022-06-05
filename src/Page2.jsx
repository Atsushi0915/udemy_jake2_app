import { Link, Outlet } from "react-router-dom"

export const Page2 = () => {
  return (
    <>
      <h1>Page2ページです。</h1>
      <Link to='/page2/100'>UrlParamater</Link>
      <br />
      <Link to='/page2/999?name=hogehoge'>QueryParamater</Link>
      <Outlet />
    </>
  )
}