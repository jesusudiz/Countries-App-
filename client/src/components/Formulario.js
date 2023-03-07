
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addActivities } from './actions/addActivities';


export const Formulario = () => {
  
      const [nombre, setNombre] = useState('');
      const [dificultad, setDificultad] = useState(1);
      const [duracion, setDuracion] = useState(0);
      const [temporada, setTemporada] = useState('Verano');
      const [paises, setPaises] = useState([]);
      const [mensaje, setMensaje] = useState('');
      const dispatch = useDispatch();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!nombre || duracion <= 0 || paises.length === 0) {
          setMensaje('Por favor, complete los campos obligatorios');
          return;
        }

        const actividad = {
          nombre,
          dificultad,
          duracion,
          temporada,
          paises,
        };
    
        try {
          const res = await axios.post('http://localhost:3001/activities', actividad);
          console.log(res.data);
          
          setMensaje('Actividad agregada exitosamente');
          dispatch(addActivities(actividad));
        } catch (error) {
          console.error(error);
        }
    
        // Limpiar los campos del formulario
        setNombre('');
        setDificultad(1);
        setDuracion(0);
        setTemporada('Verano');
        setPaises([]);
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
          case 'paises':
            setPaises(Array.from(e.target.selectedOptions, (option) => option.value));
            break;
          default:
            break;
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="dificultad">Dificultad:</label>
            <input type="number" id="dificultad" name="dificultad" min="1" max="5" value={dificultad} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="duracion">Duración:</label>
            <input type="number" id="duracion" name="duracion" value={duracion} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="temporada">Temporada:</label>
            <select id="temporada" name="temporada" value={temporada} onChange={handleChange}>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
          </div>
          <div>
            <label htmlFor="paises">Países:</label>
            <select multiple id="paises" name="paises" value={paises} onChange={handleChange}>
              <option value="Argentina">Argentina</option>
              </select>
    </div>
    <button type="submit">Enviar</button>
    </form>)
    }



