import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActivities, getListCountries } from '../redux/actions';
import { SuccessMessage } from './SuccesMessage';
import "./Formulario.css";



export const Formulario = () => {
  const paises = useSelector(state => state.listCountries);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nombre, setNombre] = useState('');
  const [dificultad, setDificultad] = useState(1);
  const [duracion, setDuracion] = useState(0);
  const [temporada, setTemporada] = useState('');
  const [pais, setPais] = useState([]);
  const [paisesSeleccionados, setPaisesSeleccionados] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const dispatch = useDispatch();
  const [mostrarExito, setMostrarExito] = useState(false);
  const [msjError, setMsjError] = useState({ nombre: "", dificultad: "", duracion: "", temporada: "", pais: [] });

  useEffect(() => {

    dispatch(getListCountries())
  }, [dispatch]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nombre === "" && duracion < 1 && pais.length === 0 && temporada === "") {
      setMostrarExito(true);
      setMensaje('error');
      setMsjError({ ...msjError, nombre: "falta rellenar este campo" })
      let error1 = document.querySelector("#nombre");
      error1.style.outline = "2px solid red";
      error1.style.borderColor = "red";
      let error2 = document.querySelector("#dificultad");
      error2.style.outline = "2px solid red";
      error2.style.borderColor = "red";
      let error3 = document.querySelector("#duracion");
      error3.style.outline = "2px solid red";
      error3.style.borderColor = "red";
      let error4 = document.querySelector("#temporada");
      error4.style.outline = "2px solid red";
      error4.style.borderColor = "red";
      let error5 = document.querySelector("#pais");
      error5.style.outline = "2px solid red";
      error5.style.borderColor = "red";
      

      return;
    } else if (!nombre) {
      setMostrarExito(true);
      setMensaje('error');
      setMsjError({ ...msjError, nombre: "falta rellenar este campo" })
      let error1 = document.querySelector("#nombre");
      error1.style.outline = "2px solid red";
      error1.style.borderColor = "red";
      
      
      return;
    } else if (duracion <= 0) {
      setMostrarExito(true);
      setMensaje('error');
      setMsjError({ ...msjError, duracion: "falta rellenar este campo" })
      let error2 = document.querySelector("#duracion");
      error2.style.outline = "2px solid red";
      error2.style.borderColor = "red";
      

      return;
    } else if (temporada=== "seleccione" || temporada==="") {
      setMostrarExito(true);
      setMensaje('error');
      setMsjError({ ...msjError, temporada: "falta rellenar este campo" })
      let error3 = document.querySelector("#duracion");
      error3.style.outline = "2px solid red";
      error3.style.borderColor = "red";
     
      

      return;
    } else if (pais.length === 0) {
      setMostrarExito(true);
      setMensaje('error');
      setMsjError({ ...msjError, pais: "seleccione al menos un pais" })
      let error5 = document.querySelector("#duracion");
      error5.style.outline = "2px solid red";
      error5.style.borderColor = "red";
      

      return;
    }

    const actividad = {
      nombre,
      dificultad,
      duracion,
      temporada,
      pais,
    };

    try {
      dispatch(addActivities(actividad));
      setMostrarExito(true);
      setMensaje("success");
      setNombre('');
      setDificultad(1);
      setDuracion(0);
      setTemporada('');
      setPais([]);
      setPaisesSeleccionados([]);
      setFormSubmitted(!formSubmitted);
      // window.location.reload();
    } catch (error) {
      console.error(error);
    }




  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nombre':

        if (/^[a-zA-Z\s]*$/.test(value) === false) {
          let error = document.querySelector("#nombre");
          error.style.outline = "2px solid red";
          error.style.borderColor = "red";
          setMsjError({ ...msjError, nombre: "no se acepta numeros ni caracteres especiales" });
        } else {
          let error = document.querySelector("#nombre");
          error.style.outline = "none";
          error.style.borderColor = "black";
          setMsjError({ ...msjError, nombre: "" });

        }

        setNombre(value);

        break;
      case 'dificultad':

        if (dificultad < 1) {
          let error = document.querySelector("#dificultad");
          error.style.outline = "2px solid red";
          error.style.borderColor = "red";

        } else {
          let error = document.querySelector("#dificultad");
          error.style.outline = "none";
          error.style.borderColor = "black";


        }
        setDificultad(value);

        break;
      case 'duracion':
        if (duracion <= 0) {
          let error = document.querySelector("#duracion");
          error.style.outline = "2px solid red";
          error.style.borderColor = "red";
          setMsjError({ ...msjError, duracion: "ingrese cantidad de horas" });

        } else {
          let error = document.querySelector("#duracion");
          error.style.outline = "none";
          error.style.borderColor = "black";
          setMsjError({ ...msjError, duracion: "" });


        }

        setDuracion(Number(value));

        break;
      case 'temporada':
        if (temporada === "seleccione" || temporada==="") {
          let error = document.querySelector("#temporada");
          error.style.outline = "2px solid red";
          error.style.borderColor = "red";
          setMsjError({ ...msjError, temporada: "por favor seleccione una temporada" });

        } else {
          let error = document.querySelector("#temporada");
          error.style.outline = "none";
          error.style.borderColor = "black";
          setMsjError({ ...msjError, temporada: "" });

        }

        setTemporada(value);

        break;
      case 'pais':

        const newPaises = Array.from(e.target.selectedOptions, (option) => option.value);
        if (newPaises.length === 0) {
          // Si no se seleccionó ningún país, deseleccionar todo

          setPais([]);
          setPaisesSeleccionados([]);

        } else if (paisesSeleccionados.includes(newPaises[0])) {
          // Si el país seleccionado ya está seleccionado antes, quitarlo
          setPais([]);
          setPaisesSeleccionados(prevSeleccionados => prevSeleccionados.filter(p => p !== newPaises[0]));
        } else {
          // De lo contrario, actualizar la selección
          const paisesNuevos = newPaises.filter(p => !paisesSeleccionados.includes(p));
          setPais(paisesNuevos);
          setPaisesSeleccionados(prevSeleccionados => [...prevSeleccionados, ...paisesNuevos]);
          setMsjError([])
        }

        break;
      default:
        break;
    }
  };

  return (
    <div className="contenedor-form">
      <h3>Agregar Actividad Turistica</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <label htmlFor="nombre">Ingrese el nombre de la actividad turistica:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleChange} />
          {msjError.nombre !== "" ? <p style={{ color: "red", fontSize: "0.5 rem" }}>{msjError.nombre}</p> : <p style={{ display: "none" }}>{msjError.nombre}</p>}
        </div>
        <div className="form-content">
          <label htmlFor="dificultad">Dificultad:</label>
          <input type="number" id="dificultad" name="dificultad" min="1" max="5" value={dificultad} onChange={handleChange} />
        </div>
        <div className="form-content">
          <label htmlFor="duracion">Horas de duración:</label>
          <input type="number" id="duracion" name="duracion" min="0" max="24" value={duracion} onChange={handleChange} />
          {msjError.duracion !== "" ? <p style={{ color: "red", fontSize: "0.5 rem" }}>{msjError.duracion}</p> : <p style={{ display: "none" }}>{msjError.duracion}</p>}
        </div>
        <div className="form-content">
          <label htmlFor="temporada">Seleccione la temporada del año para desarrollar la actividad:</label>
          <select id="temporada" name="temporada" value={temporada} onChange={handleChange}>
            <option value="seleccione">seleccione</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
          {msjError.temporada !== "" ? <p style={{ color: "red", fontSize: "0.5 rem" }}>{msjError.temporada}</p> : <p style={{ display: "none" }}>{msjError.temporada}</p>}
        </div>
        <div className="form-content">
          <label htmlFor="paises">País o paises donde se realiza:</label>
          <select multiple id="pais" name="pais" value={pais} onChange={handleChange}>

            {paises.map((p, i) => <option key={`${i}${p}`} value={p}>{p}</option>)}

          </select>
          <ul>
            <PaisesSeleccionados paisesSeleccionados={paisesSeleccionados} />
          </ul>
          {msjError.pais !== [] ? <p style={{ color: "red", fontSize: "0.5 rem" }}>{msjError.pais}</p> : <p style={{ display: "none" }}>{msjError.pais}</p>}
        </div>
        <div className="form-content guardar">
          <button className="form-btn" type="submit">
            Guardar
          </button>
        </div>

      </form>
      {mostrarExito && <SuccessMessage type={mensaje} />}
    </div>

  )
}


const PaisesSeleccionados = ({ paisesSeleccionados }) => {
  return (
    <div>
      {paisesSeleccionados.map((pais, i) => (
        <span key={`${i}${pais}`} className="span">{pais} </span>
      ))}
    </div>
  );
};
