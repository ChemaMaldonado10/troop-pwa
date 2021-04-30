import './App.css';
import logo from './assets/images/logo_troop.png';

function App() {
  return (
    <div>
      <div className="h-screen w-full bg-indigo-800 flex flex-wrap content-center justify-center">
      <img className="object-scale-down h-32 w-full" alt="logo" src={logo}/>
        <div className="bg-gray-800 p-10 rounded-md flex flex-col mt-20">
          <h1 className="text-white font-mono">LOGIN PAGE</h1>
          <button className="text-white border-2 mt-4 py-2 px-5 rounded-md bg-indigo-800">Email</button>
          <button className="text-white border-2 mt-4 py-2 px-5 rounded-md bg-indigo-800">Contraseña</button>
          <button className="text-white border-2 mt-4 py-2 px-5 rounded-md bg-indigo-800">Inicio</button>

        </div>
      </div>
    </div>
  );
}

export default App;
