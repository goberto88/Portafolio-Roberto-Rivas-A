import React from 'react'
import Carousel from '../Carousel/Carousel'

const Detail = ({project}) => {
  return (
    <>
        <div className="p-4">
                <h1 className="text-oscuro text-center font-MiFuente text-2xl my-6 pb-4">
                    Proyecto {project.proyecto}
                </h1>
                <Carousel images={[project.img1, project.img2, project.img3, project.img4, project.img5, project.img6]} />
                <div className="mt-4 mx-10 md:mx-20 mb-12 text-justify">
                    <p className="list-disc list-inside mt-2 font-Parrafo text-justify">
                        {project.descripcion1}
                    </p>
                    <p className="list-disc list-inside mt-2 font-Parrafo text-justify">
                        {project.descripcion2}
                    </p>
                    <p className="list-disc list-inside mt-2 font-Parrafo text-justify">
                        {project.descripcion3}
                    </p>
                    <a
                        href={project.url}
                        className="mt-6 inline-block  bg-oscuro hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Visitar Sitio
                    </a>
                </div>
            </div>
    </>
  )
}

export default Detail