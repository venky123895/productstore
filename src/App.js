
import './App.css';
import ProductComponent from './Components/ProductComponent';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const GlobalData =createContext();
function App() {

  const[state,setState]=useState([])

     async function getProductDetails(){
      const streamResponse=await fetch(`https://fakestoreapi.com/products`);
      const textResponse=await streamResponse.text()
      const jsonData=JSON.parse(textResponse)
      console.log("data",jsonData)
      setState(jsonData)
     }
    useEffect(() => {
      getProductDetails()
    }, [])


  return (
    <div className="App">
      <h1 style={{
        textAlign:"center",
        marginTop:"25px",
        fontSize:"50px",
        color:"green"
      }}>Products Store</h1>

      <GlobalData.Provider value={{state}}>
      <ProductComponent/>
      </GlobalData.Provider>
      
      
    </div>
  );
}

export default App;
