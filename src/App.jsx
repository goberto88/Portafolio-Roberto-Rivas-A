import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import Aside from './components/Aside/Aside'
import Info from './components/Info/Info'
import Contact from './components/Contact/Contact'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import ItemProjects from './components/ItemProjects/ItemProjects'


function App() {
  

  return (
    <BrowserRouter>
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/proyectos' element={<ItemProjects/>}/>
        <Route path='/Proyecto/:id' element={<ProjectDetail/>}/>
        <Route path='/sobre mi' element={<Info/>}/>
        <Route path='/contacto' element={<Contact/>}/>
      </Routes>
      <Aside/>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
