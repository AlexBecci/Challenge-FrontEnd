import React from "react";
import Card from "./workshops/Card";

import thumb3 from "../images/Thumb/thumb-01.jpg";
import thumb1 from "../images/Thumb/thumb-02.jpg";
import thumb2 from "../images/Thumb/thumb-03.jpg";
import thumb6 from "../images/Thumb/thumb-04.jpg";
import thumb4 from "../images/Thumb/thumb-05.jpg";
import thumb5 from "../images/Thumb/thumb-06.jpg";

function Blog() {
  return (
    <section className="text-gray-800 body-font bg-orange-50 w-full">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start px-20">
            <h2 className="sm:text-3xl text-2xl title-font font-normal text-gray-900 mt-4 mb-4">
              Mucho más
              <br />
              que una escuela de
              <br />
              <span className="font-bold underline">creativos</span>
            </h2>
            <p className="leading-relaxed mb-8">
              Un Brother es alguien que
              <span className="underline text-black">piensa continuamente</span>
              , inquieto,
              <br />
              <span className="font-semibold">curioso</span> y reflexivo.
              <br />
            </p>
            <p className="leading-relaxed mb-8">
              Que se
              <span className="underline text-black">plantea preguntas </span> y
              busca las respuestas. Un Brother es alguien que se abre camino,
              proactivo, que tiene iniciativas, que{" "}
              <span className="font-semibold">busca oportunidades.</span>
            </p>
            <p className="leading-relaxed mb-8">
              Un Brother no deja que las cosas pasen. Va a buscarlas y las pelea
              y que si gana, sigue a por más.
            </p>
            <p className="leading-relaxed mb-8 font-semibold">
              Y si pierde, no se rinde
              <span className="underline  text-black">jamás</span> .
            </p>
          </div>

          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <h2 className="sm:text-3xl text-2xl title-font text-gray-900 mt-4 mb-4 font-bold ">
              Cursos & Workshops
            </h2>
            <div className="flex flex-wrap -m-4">
              <Card img={thumb1} name="Curso Anual de Creatividad" />
              <Card img={thumb2} name="Planificación y Estrategia Creativa" />
              <Card img={thumb3} name="PR & Comunicación" />
              <Card img={thumb4} name="Digital y Social Media" />
              <Card img={thumb5} name="Desing Thinking" />
              <Card img={thumb6} name="Planificación y Estrategia Creativa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
