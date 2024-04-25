import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <>
      <section className="flex flex-col justify-center px-3 mx-3 mt-10  ">
        <div className="flex flex-col gap-3 sm:flex-row md:flex-row items-center justify-center ">
          <div className="text-center flex flex-col items-center">
            <h1 className="font-MiFuente font-bold text-2xl md:text-5xl text-oscuro tracking-wider text-transparent: uppercase">
              Roberto Rivas A.
            </h1>
            <h3 className=" mt-4 font-MiFuente font-semibold text-lg sm:text-xl md:text-3x1 text-oscuro tracking-wider text-transform: uppercase">
              &lt;Desarrollador Front-end/&gt;
            </h3>

            <div className="flex w-72 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="200"
                height="80"
                viewBox="0 0 48 48"
                
              >
                <path
                  fill="#80deea"
                  d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                ></path>
                <path
                  fill="#80deea"
                  d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                ></path>
                <path
                  fill="#80deea"
                  d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                ></path>
                <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="200"
                height="80"
                viewBox="0 0 48 48"
                
              >
                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                <path
                  fill="#000001"
                  d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="200"
                height="80"
                viewBox="0 0 48 48"
                
              >
                <path
                  fill="#0277BD"
                  d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                ></path>
                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path
                  fill="#FFF"
                  d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                ></path>
                <path
                  fill="#EEE"
                  d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="200"
                height="80"
                viewBox="0 0 48 48"
                
              >
                <path
                  fill="#00acc1"
                  d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="200"
                height="80"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#e64a19"
                  d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                ></path>
                <path
                  fill="#7c4dff"
                  d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                ></path>
                <path
                  fill="#66bb6a"
                  d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                ></path>
                <path
                  fill="#ff7043"
                  d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                ></path>
                <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center md:flex-nowrap">
  <Link to="/sobre mi">
    <button
      className="flex items-center justify-center w-36 sm:w-40 lg:w-44 md:w-52 h-8 md:h-10 bg-oscuro hover:bg-black text-white text-xs sm:text-sm md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 md:mb-0 md:mr-2"
      type="button"
    >
      Sobre mi
    </button>
  </Link>
  <a href="/CV_RobertoRivas.pdf" download>
    <button
      className="flex items-center justify-center w-36 sm:w-40 lg:w-44 md:w-52 h-8 md:h-10 bg-oscuro hover:bg-black text-white text-xs sm:text-sm md:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Descarga mi CV
    </button>
  </a>
</div>


          </div>
          <img
            className=" w-56 sm:w-64 lg:w-72: md:w-80  mt-4 sm:mt-0 lg:mt-0 md:mt-0"
            src="/images/Seccion.png"
            alt="ImagenSeccion"
          />
        </div>
      </section>
    </>
  );
};

export default Section;
