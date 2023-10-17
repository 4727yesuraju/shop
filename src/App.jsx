import Menu from "./component/Menu"
import Setting from "./component/Setting"


function App() {

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 px-4 py-4">
       <Menu/>
       <Setting />
    </div>
  )
}

export default App
