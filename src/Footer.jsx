import React from 'react'
import{ReactComponent as Logo} from './images/logo.svg'
import{ReactComponent as FB} from './images/icon-facebook.svg'
import{ReactComponent as Insta} from './images/icon-instagram.svg'
import{ReactComponent as Pint} from './images/icon-pinterest.svg'
import{ReactComponent as Twitter} from './images/icon-twitter.svg'
import{ReactComponent as Youtube} from './images/icon-youtube.svg'

function Footer() {
  return (
    <>
    <div  className='footer'  > 
        <div className="bg-warng logo-icons text-center  ">
        <div className="text-secondary fake-copy-right ">Copyright 2020. All rights reserved</div>
          <div className="footer-logo px-2"><Logo fill='#FFF' /></div>
          <div className="icons d-flex">
            <FB  className='footer-icon' />
            <Twitter className='footer-icon'/>
            <Youtube className='footer-icon'/>
            <Insta className='footer-icon' />
            <Pint className='footer-icon' />
          </div>
        
       
        </div>
        <div className="bg-w  menus d-flex">
          <ul className="menu1  ">
            <li><a href="">Home</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">About Us</a></li>
          </ul>
          <ul className="menu1">
            <li><a href="">Careers</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li className='invisible'><a href="">Home</a></li>
            
          </ul>
        </div>
        <div className=" footer-form text-light">
          <form type="submit">
              <input  type='email' className='rounded-pill input-footer' placeholder='Updates in your inbox..'  er />
              <button className='go-btn rounded-pill' type='submit'    >Go</button>
          </form>
          <div className="text-secondary copyright">Copyright 2020. All rights reserved</div>
        </div>
        

    </div>
    
    </>
  )
}

export default Footer