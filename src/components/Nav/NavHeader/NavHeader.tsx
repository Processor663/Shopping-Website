import { NavHeader } from "./NavHeader.styles"


const Navbar = () => {
  return (
    < >
      <NavHeader>
        <div className="container">
          <div className="navHeader-order">
            <p>Order Before 17:30, Shipped Today</p>
          </div>
          <div className="navHeader-links">
            <p>Wishlist|Account|USD $|English</p>
          </div>
        </div>
      </NavHeader>
    </>

  )
}

export default Navbar