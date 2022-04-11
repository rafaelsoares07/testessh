import axios from "axios"


function GetCPF(props){
axios.get(`https://viacep.com.br/ws/${props.cpf}/json/`).then((response)=>{
    let data = response.data
    
    console.log(data.logradouro)
    console.log(data.cep)
    console.log(data.ddd)


})

return(
    <h1>{props.cpf}</h1>
)
}

export default GetCPF;