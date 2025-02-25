import { Trending_Card } from "./Trending_product.styles"

// IMAGES 
import hero from "../../../assets/hero-image1.png"

const Trending_Product = () => {
  return (
    <>
      <Trending_Card>
        <div className="image">
          <img src={hero} alt="" />
        </div>
        <div className="content">
          <p>Home Warkle Wall</p>
          <small>70,000</small>
          <small>60,000</small>
          lorem400
        </div>
      </Trending_Card>

    </>
  )
}

export default Trending_Product