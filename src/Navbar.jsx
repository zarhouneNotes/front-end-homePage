import React , {useState} from 'react'
import{ReactComponent as Logo} from './images/logo.svg'
import{ReactComponent as Burger} from './images/icon-hamburger.svg'
import{ReactComponent as Close} from './images/icon-close.svg'
import Button from './Button'

function Navbar() {
    const [Active, setActive] = useState(false)
  return (
    <div className='navbar'  >
        <div className="logo">
            <Logo fill='#242d52' />
        </div>
        <ul className={`menu my-auto ${Active ? 'menu-active'  : '' }`}  >
            <li><a href="">Pricing</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Creers</a></li>
            <li><a href="">Commmunity</a></li>
        </ul>
        <div className="btn-section">
            <Button />
            <div onClick={()=>{setActive(!Active)}} >
            { Active ? <Close className='burger'  /> :   <Burger className='burger' />}
            </div>
        </div>
       {/* {Active && <div className="shadow bg-drk"> helo world </div>} */}
    </div>
  )
}

export default Navbar