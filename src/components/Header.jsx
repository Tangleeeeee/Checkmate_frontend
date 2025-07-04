import './Header.css'
import '../../src/index.css'

import logo from '../assets/checkmate 로고.jpg'

const Header=({title})=>{
    const handleLogoClick = () => {
        window.location.reload();
    }
    
    return (
        <header className='Header'>
            <div className='Header_image'>
                <img src={logo}
                onClick={handleLogoClick}/>
            </div>
            <div className="Header_main"
            style={{fontFamily:'karma'}}>
                {title}
            </div>
        </header>
    )
    
}
export default Header