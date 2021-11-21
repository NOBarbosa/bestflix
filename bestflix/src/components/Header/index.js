import './style.css';
import logo from '../../assets/logo.svg';
import Menu from '../Menu';

function Header(){
    return(
        <header>
            <img 
            src={logo}  
            alt='Logo'
            className='logo'
            />
            <Menu />
        </header>
    )
}

export default Header;