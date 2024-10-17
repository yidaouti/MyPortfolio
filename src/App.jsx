import Home from "./components/Home"
// import Sidenav from "./components/Sidenav"
import SideNav from "./components/Sidenav"


function App() {

  return (
    <div class="bg-slate-700">

      <SideNav content={<Home />} />
      
    </div>
  )
}

export default App
