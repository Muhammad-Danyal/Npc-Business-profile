import './App.css'
import Header from './components/headers/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Project from './components/projects/Project'

function App() {

  return (
    <>
     <main className='bg-blackbg '>
       <Header/>
       <Home/>
       <About/>
       <Services/>
       <Project/>
     </main>
    </>
  )
}

export default App
