import Home from "./components/Home"
import Sidenav from "./components/Sidenav"


function App() {

  return (
    <div class=" flex bg-slate-700">

      <Sidenav />

      <main className="flex-1 p-2"> {/* This will fill the remaining width */}
        <Home />
      </main>


    </div>
  )
}

export default App
