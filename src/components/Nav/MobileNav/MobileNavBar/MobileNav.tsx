import { useState } from "react";
import Wrapper  from "./MobileNav.styles"
import DropdownMenu from "../BootstrapDropdown/Drowndown";
import BootstrapLeftOffcanvas from "../BootstrapLeftOffcanvas/OffCanvas";
import { BootstrapRightOffcanvas } from "../BootstrapRightOffcanvas/OffCanvas";

// ICONS
import { CiSearch } from "react-icons/ci";;

// Images
import Logo from '../../../../assets/Logo.png'

const MobileNav = () => {

const [close, setClose] = useState(false)

  return (
    <Wrapper className="container" close={close}>
      <div className="menu-left">
        <div>
          <BootstrapLeftOffcanvas />
        </div>

        <div className="search">
          <CiSearch fontSize="25px" onClick={() => setClose((prev)=> !prev )} />
          <div className="inputContainer">
            <input type="text" placeholder="Search"/>
            <CiSearch fontSize="25px"/>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={Logo} alt="Logo" width={"100%"} />
      </div>
      <div className="menu-right">
        <div>
          <DropdownMenu />
        </div>
        <div className="cart-container" >
          <BootstrapRightOffcanvas />
          <div className="circle">1</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default MobileNav