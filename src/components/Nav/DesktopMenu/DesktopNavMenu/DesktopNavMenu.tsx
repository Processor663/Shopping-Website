import { ReactTyped } from 'react-typed'
import { Wrapper } from './DesktopNavMenu.styles'
import BootstrapDropdown from '../BootstrapDropdown/DropdownMenu'

const DesktopNavMenu = () => {

  let NavItems = ['About', 'Collection', 'Contact', 'Blog', 'Shop', 'Service']
  let typedStrings = ["FLAT 10% OFF ALL IPHONES", "FLAT 10% OFF ALL PURCHASE"]
  return (
    <Wrapper>
      <div className="container  px-0">
        <BootstrapDropdown />
        <div className='links'>
          {NavItems.map( ( NavItem, index ) => ( <span className='link-item' key={index}>{NavItem}</span> ) )}
        </div>
        <button>
          <ReactTyped strings={typedStrings} typeSpeed={200} backSpeed={500} backDelay={3000} showCursor={false} loop />
        </button>
      </div>
    </Wrapper>
  )
}

export default DesktopNavMenu