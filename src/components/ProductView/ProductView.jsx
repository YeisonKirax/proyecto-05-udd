import { Button, Col, Container, Image, Row } from 'react-bootstrap'

export const ProductView = ( { product } ) => {
  return (
    <Container fluid style={ { marginTop: 20 } }>
      <Row style={ { justifyContent: "center" } }>
        <Col xs={ 12 } sm={ 12 } md={ 6 } style={ { textAlign: "center" } }>
          <Image src={ product.imageUrl } width={ 500 } height={ 500 } fluid >
          </Image>
        </Col>
        <Col xs={ 12 } sm={ 12 } md={ 6 }>
          <Row style={ { gap: 40 } }>
            <Col className='text-center' xs={ 12 } sm={ 12 } md={ 12 }>{ product.title }</Col>
            <Col className='text-center' xs={ 12 } sm={ 12 } md={ 12 }>{ product.description }</Col>
            <Col className='text-center' xs={ 12 } sm={ 12 } md={ 12 }>{ product.price }</Col>
          </Row>
          <Row>
            <Col style={ { textAlign: "center" } }>
              <Button>Agregar al carrito</Button>
            </Col>
            <Col style={ { textAlign: "center" } }>
              <Button>Comprar</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}