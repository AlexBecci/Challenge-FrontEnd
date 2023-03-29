import React from "react";
import CardNotices from "./Notices/CardNotices";
import bThinker from "../images/bThinker.jpg";
function Notices() {
  return (
    <section className="text-gray-600 body-font bg-slate-100">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap w-full mb-20 justify-center text-center">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-normal title-font mb-2 text-gray-900">
              Noticias Frescas
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <CardNotices
            text="Chin chin por nuestra plata en el #hackforgood del cdec"
            img={bThinker}
            date=" 04/04/2022"
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={bThinker}
            date=" 04/04/2022"
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={bThinker}
            date=" 04/04/2022"
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={bThinker}
            date=" 04/04/2022"
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={bThinker}
            date=" 04/04/2022"
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={bThinker}
            date=" 04/04/2022"
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={bThinker}
            date=" 04/04/2022"
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={bThinker}
            date=" 04/04/2022"
          />
        </div>
      </div>
    </section>
  );
}

export default Notices;
