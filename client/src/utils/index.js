// import { useSelector } from "react-redux";

import { orderAsc,orderDesc } from "../redux/actions";

// //* listado de continentes para el componente NavBar.
// export const continentes = [
//     { id: 1, name: "Asia" },
//     { id: 2, name: "America" },
//     { id: 3, name: "America del Sur" },
//     { id: 4, name: "America del Norte" },
//     { id: 5, name: "Europa" },
//     { id: 6, name: "Oceanía" },
//     { id: 7, name: "Africa" },
//     { id: 8, name: "Antártida" }
// ];

// //* Listado de ordenamientos para el componente NavBar.

export const ordenar = [{ id: 1, name: "Nombre ASC",action: orderAsc }, { id: 2, name: "Nombre DESC" , action: orderDesc}, { id: 3, name: "mayor Poblacion" }, { id: 4, name: "menor Poblacion ASC" }];

// //* funcion para el input de busqueda en Navbar.

// const search = (e)=>{
//     e.preventDefault();
//     e.target.value;
//     //!aqui debo usar useSelector para el action que va devolver el pais por nombre;
//     useSelector();
// }