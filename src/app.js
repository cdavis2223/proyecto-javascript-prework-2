/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#generar").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  //write your code here
  console.log("Hola Mundo");
};

let generateExcuse = () => {
  let quien = ["Mi perro", "Mi abuela", "Mi jefa", "Mi hermana"];
  let accion = ["comió", "orinó", "quebró", "quemó", "robó"];
  let que = ["mi libro", "mis llaves", "mi carro", "mi computadora"];
  let cuando = [
    "antes de clase",
    "justo ahora",
    "cuando terminé",
    "durante el almuerzo",
    "mientras dormía"
  ];

  let arrayQuien = Math.floor(Math.random() * quien.length);
  let arrayAccion = Math.floor(Math.random() * accion.length);
  let arrayQue = Math.floor(Math.random() * que.length);
  let arrayCuando = Math.floor(Math.random() * cuando.length);

  return (
    quien[arrayQuien] +
    " " +
    accion[arrayAccion] +
    " " +
    que[arrayQue] +
    " " +
    cuando[arrayCuando]
  );
};
