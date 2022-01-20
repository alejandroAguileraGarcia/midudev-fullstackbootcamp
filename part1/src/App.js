import './App.css';
import Mensaje from './Mensaje'

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje colores='red' message='Estamos trabajando '/>
      <Mensaje colores='yellow' message='En un curso '/>
      <Mensaje colores='red' message='De React '/>
      <Description />
    </div>
  );
}

export default App;