

import { Logo } from "../base/Logo"
import { CartWidget } from "./CartWidget"
import Nav from "./Nav"

const Header =  () => {
    return (
        <header className="header">
            <Logo className='hola' nombre='Luis'/>
            <Nav  className='hola' nombre='Luis' />
            <CartWidget/>
        </header>
    )
}
export default Header

