import React from "react";
import { Link } from "react-router-dom";

const Projects = ({project}) => {
  return (
    
          <>
                
                  <div key={project.id} className="max-w-xs rounded overflow-hidden shadow-lg mx-2 md:mx-4 my-4 w-full sm:w-auto">
                    <div className="w-full h-32 md:h-48 flex items-center justify-center p-4">
                      <img
                        className="object-contain max-w-full max-h-full"
                        src={project.portadaImg}
                        alt={project.proyecto}
                      />
                    </div>
                    <div
                      className="px-6 py-4 bg-contain bg-no-repeat bg-center"
                      style={{ backgroundImage: 'url("/images/fondo.png")' }}
                    >
                      <div className="font-MiFuente text-lg text-oscuro mb-2">
                        {project.proyecto}
                      </div>
                      <p className="font-Parrafo text-oscuro">
                        {project.resumen}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <Link to={`/proyecto/${project.id}`}>
                        <button className="font-MiFuente text-oscuro">Ver +</button>
                      </Link>
                    </div>
                  </div>
            
          </>
  );
};

export default Projects;
