import Dropdown from 'react-bootstrap/Dropdown';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Wrapper } from './dropdown.styles';




function DropdownMenu () {
    return (
        <Wrapper>
            <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                    <HiMiniBars3BottomRight fontSize="25px" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Wrapper>
    );
}

export default DropdownMenu;