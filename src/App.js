import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import  {useEffect,useState} from "react";



function App() {
  let [val,setVal] = useState([]);
  console.log(val);
  useEffect(() => {
    fetch('http://localhost:5000/data')
    .then((response) => response.json())
    .then((data) => setVal(data));
  }, []);
  return (
    <div className="App">
      
      {
    val.map((e)=>(
    
      <Card image={e.Homeurl} HomeName={e.HomeName}/>
    ))
    }
    
    
 
    </div>
  );
}

export default App;
