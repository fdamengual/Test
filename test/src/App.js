
import './App.css';
import Contenido from './menu/Contenido'
import NavBar from './menu/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar />

      <div id="cabecera" className="mt-5 mb-3">
        <h1 className="d-inline p-1 alert-success rounded-pill ">Dashboard responsive</h1>
      </div>

      <Contenido />
    </div>


  );
}

export default App;
