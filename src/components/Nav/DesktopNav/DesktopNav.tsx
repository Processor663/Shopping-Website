import Logo from '../../../assets/Logo.png'
import CartMenu from '../CartMenu/CartMenu'
import SearchBar from '../SearchBar/SearchBar'
import { Wrapper } from './DesktopNav.styles'



const DesktopNav = () => {
    return (
        <>
            <Wrapper className='container'>
                <img src={Logo} alt="Logo" />
                <SearchBar />
                <CartMenu />
            </Wrapper>
        </>
    )
}


export default DesktopNav