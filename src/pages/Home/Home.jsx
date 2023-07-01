import { useContext } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import UserContext from '../../contexts/user/UserContext.jsx';

export function Home() {
  const userCtx = useContext( UserContext )
  const { user, verifyingToken, authStatus } = userCtx

  return (
    <Container>
      <h1>{ `Bienvenido ${ user?.fullName || "sin nombre" }` }</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://png.pngtree.com/thumb_back/fw800/background/20230407/pngtree-bay-area-has-beautiful-natural-scenery-in-summer-image_2144433.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://st.depositphotos.com/1679308/1622/i/600/depositphotos_16225575-stock-photo-landscape-of-croatian-nature.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}