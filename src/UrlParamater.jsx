import { useParams, useLocation } from "react-router-dom"

export const UrlParamater = () => {
  const { id } = useParams();

  const  {search}  = useLocation();
  
  const query = new URLSearchParams(search);

  return (
    <>
      <h1>UrlParamaterページです。</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get('name')}です</p>
    </>
  )
}