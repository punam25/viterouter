import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AdmissionForm from './Components/AdmissionForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>App</p>
       <AdmissionForm /> 
    </div>
  )
}

export default App;
