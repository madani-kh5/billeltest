import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={{display:"flex", width:"100%" , height:"100vh" , justifyContent:"center", alignItems:"center"}}>
        <Link to="ecole" style={{padding:"30px", fontSize:"40px"}}>éducation</Link>
        <Link to="information" style={{padding:"30px", fontSize:"40px"}}>information</Link>
        <Link to="architect" style={{padding:"30px", fontSize:"40px"}}>architecture</Link>
        <Link to="manga" style={{padding:"30px", fontSize:"40px"}}>manga</Link>
    </div>
  )
}

export default Home