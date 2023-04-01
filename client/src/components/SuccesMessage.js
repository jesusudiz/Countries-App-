import "./SuccesMessage.css";
import React,{useEffect} from "react";


export const SuccessMessage = ({ type }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          document.querySelector("." + type).style.display = 'none';
          
        }, 2000);
    
        return () => clearTimeout(timer);
      }, [type]);
    
  return (
    <div className={type === "success" ? "success" : "error"}>
      {type === "success" ? <p>¡Guardado exitosamente!</p> : <p>¡Por favor rellene todos los campos!</p>}
    </div>
  );
};