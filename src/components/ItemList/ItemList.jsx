import React from 'react'
import Projects from '../Projects/Projects'

const ItemList = ({projects}) => { 
    
  return (
    <>
        
        <h1 className="text-oscuro text-center font-MiFuente text-2xl my-6">
              Proyectos
        </h1>
        <div className='flex flex-wrap justify-center mx-auto max-w-6xl mb-10'>
  {projects.map((project) => <Projects project={project} key={project.id} />)}
</div> 
        
    </>
  )
}

export default ItemList
