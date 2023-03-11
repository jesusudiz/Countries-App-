
import "./Header.css"
import logo from "../img/Countries.png"

export const Header = () => {
    return (
        <header className="header-content">
            <div className="header-logo">
               <img src={logo} alt="logo countries" />
            </div>
            <div className="input-form">
    <input className="input" name="text" type="text" required="" placeholder="Buscar..."/>
   
  </div>
            <div className="header-btn">
                <span>Home</span>
            </div>

            <div className="header-btn">
                <span>Agregar Actividad</span>
            </div>
        </header>
    )
}