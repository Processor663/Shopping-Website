// STYLED COMPONENTS
import { Wrapper } from './NewsLetter.styles'

const NewsLetter = () => {
  return (
      <>
          < Wrapper>
              <h6>NEWSLETTER</h6>
              <p>Join Our Mailing List</p>
              <input type="text" placeholder='Your email' />
              <br />
              <br />
              <button>SUBSCRIBE</button>
          </Wrapper>
      </>
  )
}

export default NewsLetter