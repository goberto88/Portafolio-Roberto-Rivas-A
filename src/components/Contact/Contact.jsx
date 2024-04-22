import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { db } from "../../Firebase/config";

const Contact = () => {

  

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm();
  
    const send = (data) => {
      const contacto = {
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        mail: data.email, 
        comentario: data.mensaje, 
      };
    
      const contactRef = collection(db, "Contactos");
      addDoc(contactRef, contacto);
      reset();
    };    



  return (
    <>
      <div className="flex flex-col gap-8 md:flex-row justify-center items-center m-10 mb-16  font-Parrafo text-oscuro">
        <div className="flex flex-col justify-center w-full md:w-96   my-10 bg-contain bg-no-repeat bg-center" style={{backgroundImage: 'url("/images/fondo.png")'}}>
          <h1 className="font-MiFuente text-xl text-oscuro mb-6">Contáctame</h1>
          <p className="font-Parrafo text-oscuro text-justify">
            ¿Tienes una gran idea o marca que quiere desarrollar y necesita
            ayuda? ¡No busque más! Estoy aquí para escuchar sobre su proyecto y
            brindarle la asistencia que necesitas. Escríbeme hoy mismo y
            déjenos ser parte de su éxito.
          </p>

          <div className="flex mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <a href="mailto:roberto.g.rivas@gmail.com" className="font-Parrafo text-oscuro">
              roberto.g.rivas@gmail.com
            </a>
          </div>

          <div className="flex mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <a href="tel:+56992093488" className="font-Parrafo text-oscuro">+56 992093488</a>
          </div>
        </div>
        <form className="bg-beige font-Parrafo  w-full md:w-96 rounded-md" onSubmit={handleSubmit(send)}>
          <div className="flex mb-4 ">
            <div className="w-full mr-2">
              <label
                className="block text-oscuro text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-oscuro leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Roberto"
                {...register("nombre", { required: true })}
              />
            </div>
            <div className="w-full ml-2">
              <label
                className="block text-oscuro text-sm font-bold mb-2"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-oscuro leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Rivas"
                {...register("apellido", { required: true })}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-oscuro text-sm font-bold mb-2"
              htmlFor="telefono"
            >
              Teléfono
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-oscuro leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="+56 555555555"
              {...register("telefono", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-oscuro text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-oscuro leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="email@gmail.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-oscuro text-sm font-bold mb-2"
              htmlFor="mensaje"
            >
              Mensaje
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-oscuro leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa tu pregunta o mensaje"
              {...register("mensaje", { required: true })}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button 
              className="w-full md:w-screen bg-oscuro hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};


export default Contact;
