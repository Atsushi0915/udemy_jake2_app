import { Link, Outlet, useNavigate } from "react-router-dom"

export const Page1 = () => {
  const arr = [...Array(100).keys(1)];

  const navigate = useNavigate() //reactv5では useHistory

  const onClickDtailA = () => navigate('/page1/detailA')

  return (
    <>
      <h1>Page1ページです。</h1>
      <br />
      <Link to='/page1/detailA' state={arr} >Page1DetailA</Link>
      <br />
      <Link to='/page1/detailB' >Page1DetailB</Link>
      <br />
      <button onClick={onClickDtailA}>Page1DtailA</button>

      <Outlet />
    </>
  )
}