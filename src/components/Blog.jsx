import React from "react";
import Card from "./workshops/Card";
import cursoAnual from "../images/cursoAnual.png";

function Blog() {
  return (
    <section className="text-gray-800 body-font overflow-hidden bg-amber-50 w-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start px-20">
            <h2 className="sm:text-3xl text-2xl title-font font-normal text-gray-900 mt-4 mb-4">
              Mucho mas
              <br />
              que una escuela de
              <br />
              <span className="font-bold underline">creativos</span>
            </h2>
            <p className="leading-relaxed mb-8">
              Un Brother es alguien que{" "}
              <span className="underline text-black">piensa continuamente</span>
              , inquieto,
              <br /> curioso y reflexivo.
              <br />
            </p>
            <p className="leading-relaxed mb-8">
              Que se{" "}
              <span className="underline text-black">plantea preguntas </span> y
              busca las respuestas. Un Brother es alguien que se abre camino,
              proactivo, que tiene iniciativas, que busca oportunidades.
            </p>
            <p className="leading-relaxed mb-8">
              Un Brother no deja que las cosas pasen. Va a buscarlas y las pelea
              y que si gana, sigue a por más.
            </p>
            <p className="leading-relaxed mb-8">
              Y si pierde, no se rinde{" "}
              <span className="underline text-black">jamás</span> .
            </p>
          </div>

          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <h2 className="sm:text-3xl text-2xl title-font text-gray-900 mt-4 mb-4 font-bold ">
              Cursos & Workshops
            </h2>
            <div className="flex flex-wrap -m-4">
              <Card img={cursoAnual} name="Curso Anual de Creatividad" />
              <Card img={cursoAnual} name="Planificacion y Estrategia Creativa" />
              <Card img={cursoAnual} name="PR & Comunicacion" />
              <Card img={cursoAnual} name="Digital y Social Media" />
              <Card img={cursoAnual} name="Desing Thinking" />
              <Card img={cursoAnual} name="Planificacion y Estrategia Creativa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
