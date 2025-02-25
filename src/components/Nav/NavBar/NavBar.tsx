import DesktopNav from "../DesktopNav/DesktopNav"
import DesktopNavMenu from "../DesktopMenu/DesktopNavMenu/DesktopNavMenu"
import MobileNav from "../MobileNav/MobileNavBar/MobileNav"
import NavHeader from "../NavHeader/NavHeader"



const NavBar = () => {
    return (
        <header className="p-50">
            <NavHeader />
            <DesktopNav />
            <MobileNav />
            <DesktopNavMenu />
        </header>
    )
}

export default NavBar