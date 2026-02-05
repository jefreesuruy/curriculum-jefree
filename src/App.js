import './App.css';
import Header from './Componentes/Header';
import InfoPersonal from './Componentes/InfoPersonal';
import Proyectos from './Componentes/Proyectos';
import Footer from './Componentes/Footer';
import Habilidades from './Componentes/Habilidades';
import Formacion from './Componentes/Formacion';

function App() {
  return (
      <div 
        className='body'
        style={{
          backgroundImage: "url(/fondo.jpeg)",
        }}
      >
        <Header/>
        <InfoPersonal/>
        <Habilidades/>
        <Proyectos/>
        <Formacion/>
        <Footer/>
      </div>
  );
}

export default App;
