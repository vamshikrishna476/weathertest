import React,{useState} from 'react';
import './App.css'





const App = () => {
  const[city,setCity]=useState("")
  const [result,setResult]=useState("")
  const changeHandler =e=>{
    setCity(e.target.value);
  }

  const SubmitHandler =e=>{
    e.preventDefault();
     fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json())
    .then( data=>{
      const kelvin = data.main.temp;
      const celcius = kelvin - 273;
      setResult("Temperature at "+" "+city+"\n"+Math.round(celcius)+"°C");
      setCity("")
    
    }).catch(error =>console.log(error))
  

  }
  return (
    <div className='conta'>
      
      <div className='main' >
        <div className='container'>
          <h1 className='title'>Weather API</h1>
          <form onSubmit={SubmitHandler}>

            <input type='text' placeholder='city ' value={city} onChange={changeHandler}></input><br/><br/>
          
            <button>Data</button>
          </form>
          <h1>{result}</h1>
          <img src='https://www.pikpng.com/pngl/m/17-176384_cloud-clipart-png-transparent-background-cloud-clip-art.png'/>
          <h2>{city}</h2>
          </div>
     
      </div>
    </div>
  )
}

export default App
