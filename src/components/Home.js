import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={{display:"flex", width:"100%" , height:"100vh" , justifyContent:"center", alignItems:"center"}}>
        <Link to="journal1" style={{padding:"30px", fontSize:"40px"}}>journal 1</Link>
        <Link to="journal2" style={{padding:"30px", fontSize:"40px"}}>journal 2</Link>
    </div>
  )
}

export default Home