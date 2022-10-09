import { Link, NavLink } from 'react-router-dom';
import './SideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const SideBar = () => {

    const [showNav, setShowNav] = useState(false);


    return(
        <div className="nav-bar">
        <Link 
          className="logo"
          to="/"
          onClick={() => setShowNav(false)}>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink 
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink 
            exact="true"
            activeclassname="active"
            className="resume-link"
            to="/portfolio"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink 
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className='close-icon' />
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/gaurav-kad/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/KadGaurav"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon' />
      </div>


        // <div className='nav-bar'>
        //     <Link className='logo' to='/'>
        //         <img src={LogoS} alt='Logo' />
        //         <img className='sub-logo' src={LogoSub} alt='Logosub' />
        //     </Link>
        //     <nav>
        //         <NavLink exact="true" activeclassname = "active" to='/'>
        //             <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        //         </NavLink>
        //         <NavLink exact="true" activeclassname = "active" to='/about' className='about-link'>
        //             <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        //         </NavLink>
        //         <NavLink exact="true" activeclassname = "active" to='/contact' className='contact-link'>
        //             <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        //         </NavLink>
        //     </nav>
        //     <ul>
        //         <li>
        //             <a href="https://www.linkedin.com/in/gaurav-kad" target='_blank' rel='noreferrer'>
        //                 <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
        //             </a>
        //         </li>
        //         <li>
        //             <a href="https://github.com/KadGaurav" target='_blank' rel='noreferrer'>
        //                 <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
        //             </a>
        //         </li>
        //     </ul>
        // </div>
    )
}

export default SideBar;