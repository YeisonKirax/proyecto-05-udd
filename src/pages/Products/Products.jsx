import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx'
import UserContext from '../../contexts/users/UserContext.jsx'

export const Products = () => {
  const userCtx = useContext( UserContext )
  const { user } = userCtx
  const { fullName } = user
  //llama a la api para ver productos (/products)
  const products = [ {
    id: "1",
    title: "Producto 1",
    description: "Descripcion",
    price: 50444,
    imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  }, {
    id: "2",
    title: "Producto 1",
    description: "Descripcion",
    price: 50444,
    imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  }, {
    id: "3",
    title: "Producto 1",
    description: "Descripcion",
    price: 50444,
    imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  }, {
    id: "4",
    title: "Producto 1",
    description: "Descripcion",
    price: 50444,
    imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  }, {
    id: "5",
    title: "Producto 1",
    description: "Descripcion",
    price: 50444,
    imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  }, {
    id: "6",
    title: "Producto 1",
    description: "Descripcion",
    price: 50444,
    imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  } ]
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Catálogo de productos de { fullName }</h1>
        </Col>
      </Row>
      <Row>
        { products.map( product => {
          return <Col key={ product.id }>
            <ProductCard product={ product } productViewPath={ `/products/${ product.id }` }></ProductCard>
          </Col>
        } )
        }
      </Row>
    </Container>

  )
}

export default Products