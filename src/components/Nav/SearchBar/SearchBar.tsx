import { Wrapper } from "./SearchBar.styles"

{/* ICONS */ }
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Wrapper >
      <input type="text" placeholder="search" />
      <button>
        <FaSearch />
      </button>
    </Wrapper>
  )
}

export default SearchBar