import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms, { type FormType } from './components/Forms'

function App() {
  const [graph, setGraph] = useState<Record<string, unknown> | null>(null);
  useEffect(() => {
    console.log('App component mounted')
    fetch('http://localhost:3000/api/v1/1/actions/blueprints/bp_01jk766tckfwx84xjcxazggzyc/graph')
      .then((response) => response.json())
      .then((json) => setGraph(json))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Avantos App</h1>
      {(graph?.nodes as  FormType[] | undefined)?.map((form) => (
        <Forms form={form} />
      ))}
    </>
  )
}

export default App
