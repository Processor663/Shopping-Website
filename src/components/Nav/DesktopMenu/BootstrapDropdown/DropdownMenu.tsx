import Dropdown from 'react-bootstrap/Dropdown';
import { Wrapper } from './Dropdown.styles';

// ICONS
import { HiMiniBars3BottomRight } from "react-icons/hi2";



function BootstrapDropdown () {
    return (
        <Wrapper>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    <HiMiniBars3BottomRight fontSize="25px" />
                    <div>ALL CATEGORIES</div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Blogs</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Accessories</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Collection</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Contact</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Included Pages</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">About Us</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">FAQs</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
       </Wrapper>
    );
}

export default BootstrapDropdown;