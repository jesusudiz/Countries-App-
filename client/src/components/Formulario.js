
import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addActivities, getListCountries } from '../redux/actions';
import { SuccessMessage } from './SuccesMessage';
import "./Formulario.css"
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
  useEffect(() => {

    dispatch(getListCountries())
  }, [dispatch]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || duracion <= 0 || paises.length === 0|| temporada==="seleccione") {
      setMostrarExito(true);
      setMensaje('error');
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
      setMensaje("success")
      setFormSubmitted(true);
      setNombre('');
      setDificultad(1);
      setDuracion(0);
      setTemporada('');
      setPais([]);
      setPaisesSeleccionados([]);
    } catch (error) {
      console.error(error);
    }

    

   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nombre':
        setNombre(value);
        break;
      case 'dificultad':
        setDificultad(Number(value));
        break;
      case 'duracion':
        setDuracion(Number(value));
        break;
      case 'temporada':
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
        </div>
        <div className="form-content">
          <label htmlFor="dificultad">Dificultad:</label>
          <input type="number" id="dificultad" name="dificultad" min="1" max="5" value={dificultad} onChange={handleChange} />
        </div>
        <div className="form-content">
          <label htmlFor="duracion">Horas de duración:</label>
          <input type="number" id="duracion" name="duracion" value={duracion} onChange={handleChange} />
        </div>
        <div className="form-content">
          <label htmlFor="temporada">Seleccione la temporada del año para desarrollar la actividad:</label>
          <select id="temporada"  name="temporada" value={temporada} onChange={handleChange}>
          <option value="seleccione">seleccione</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
        </div>
        <div className="form-content">
          <label htmlFor="paises">País o paises donde se realiza:</label>
          <select multiple name="pais" value={pais} onChange={handleChange}>
            {paises.map((p, i) => <option key={`${i}${p}`} value={p}>{p}</option>)}
          </select>
          <ul>
            <PaisesSeleccionados paisesSeleccionados={paisesSeleccionados} />
          </ul>
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


