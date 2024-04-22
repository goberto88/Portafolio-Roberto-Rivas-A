import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Firebase/config'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemProjects = () => {
  const [projects, setProjects] = useState([]);

  const proyecto = useParams().proyecto

  useEffect(() => {
    const proyectosCollection = collection(db, 'Proyectos');
    const q = proyecto ? query(proyectosCollection, where('proyecto', '==', proyecto)) : proyectosCollection;
      
    getDocs(q)
      .then((resp)=>{
        setProjects(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    }, [proyecto]);

  return (
    <>
      <ItemList projects={projects}/>
    </>
  )
}

export default ItemProjects;
