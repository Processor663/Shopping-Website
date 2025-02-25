import { Wrapper } from "./CartMenu.styles"
// ICONS
import { PiBasketThin } from "react-icons/pi";

const CartItem = () => {
  return (
    <>
      <Wrapper>
        <div className="cart">
          <PiBasketThin fontSize={'60px'} color="#9b9b9b"/>
          <span className="circle">1</span>
        </div>
        <div className="cartContent">
          <small className="text">Shopping Cart</small>
          <br />
          <small className="price">$60.00</small>
        </div>
      </Wrapper>
    </>
  )
}

export default CartItem