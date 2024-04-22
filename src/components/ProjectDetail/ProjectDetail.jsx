import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { useParams } from 'react-router-dom';
import Detail from '../Detail/Detail';

const DetailProject = () => {
    const [project, setProject] = useState(null);

    const { id } = useParams();
  
    useEffect(() => {
        const projectDoc = doc(db, 'Proyectos', id);
        getDoc(projectDoc).then((resp) => {
            setProject ({ ...resp.data(), id: resp.id });
        });
    }, [id]);

   
        return <>{project && <Detail project={project} />}</>;
    
}

export default DetailProject;
