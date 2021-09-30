import React from "react";
import { NavLink, Link} from 'react-router-dom'

function NavbarLogged(){
    return(
        <nav className='navbar grid-two-columns'>
            <div>
                <Link to='/'>
                    <img src="https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png"></img>
                </Link>
            </div>
            <div>
                <ul className='nav-logged'>
                    <NavLink activeClassName='active' exact to="/accounts"><li>Cuentas</li></NavLink>
                    <NavLink activeClassName='active' exact to="/profile"><li>Perfil</li></NavLink>
                    <NavLink activeClassName='active' exact to="/users"><li>Usuarios</li></NavLink>
                    <NavLink activeClassName='active' exact to="/teams"><li>Equipos</li></NavLink>
                    <button className='btn-main'>Cerrar Sesión</button>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarLogged