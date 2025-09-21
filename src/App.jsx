
import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/countries'


const coutnriesPromise = async() =>{
  const data = await fetch("https://openapi.programming-hero.com/api/all");
  return data.json();
}


function App() {


  const promise = coutnriesPromise();

  return (
    <>

    <Suspense fallback={<p>waiting...</p>}>
      <Countries promise={promise}></Countries>
    </Suspense>

    </>
  )
}

export default App
