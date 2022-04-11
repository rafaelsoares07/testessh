import './App.css';
import BuscarCEP from './BuscarCEP';
import DadosCEP from './DadosCEP';
import GetCPF from './requestCep';

function pedirCEP(){
  return prompt('digite seu cep')
}

function App() {
  
  return(
    <div>
     
      <BuscarCEP />
      <DadosCEP />
      
      <GetCPF cpf={pedirCEP()} />
      
    </div>
  )
  
}

export default App;
