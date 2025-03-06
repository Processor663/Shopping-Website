import { Trending_Card } from "./Trending_product.styles"

// IMAGES 
import hero from "../../../assets/hero-image1.webp"

// ICONS
import { IoMdStar } from "react-icons/io";

type Props = {
  flag: string;
}

const Trending_Product = ( {flag} :Props) => {
  return (
    <>
      <Trending_Card flag={flag}>
        <div className="product-flag">
          <div className="sale">Sale</div>
          <div className="sold-out">Sold out</div>
        </div>
        <div className="image">
          <img src={hero} alt="" />
        </div>
        <div className="icons">
          <IoMdStar style={{ color: "#FEC42D", fontSize: "20px" }}/>
          <IoMdStar style={{ color: "#FEC42D", fontSize: "20px" }}/>
          <IoMdStar style={{ color: "#FEC42D", fontSize: "20px" }}/>
          <IoMdStar style={{ color: "#ccc", fontSize: "20px" }}/>
          <IoMdStar style={{ color: "#ccc", fontSize: "20px" }}/>
        </div>
        <div className="content">
          <p>Home Warkle Wall</p>
          <small>$ 60,000</small>
        </div>
      </Trending_Card>

    </>
  )
}

export default Trending_Product