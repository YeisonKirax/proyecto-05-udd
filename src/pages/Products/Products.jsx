import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx';
import axiosClient from "../../config/axios.jsx";
import UserContext from '../../contexts/user/UserContext.jsx';
export const Products = () => {
  const userCtx = useContext( UserContext )
  const { user } = userCtx
  //llama a la api para ver productos (/products)
  const [ products, setProducts ] = useState( [] )
  // const products = [ {
  //   id: "1",
  //   title: "Producto 1",
  //   description: "Descripcion",
  //   price: 50444,
  //   imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  // }, {
  //   id: "2",
  //   title: "Producto 1",
  //   description: "Descripcion",
  //   price: 50444,
  //   imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  // }, {
  //   id: "3",
  //   title: "Producto 1",
  //   description: "Descripcion",
  //   price: 50444,
  //   imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  // }, {
  //   id: "4",
  //   title: "Producto 1",
  //   description: "Descripcion",
  //   price: 50444,
  //   imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  // }, {
  //   id: "5",
  //   title: "Producto 1",
  //   description: "Descripcion",
  //   price: 50444,
  //   imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  // }, {
  //   id: "6",
  //   title: "Producto 1",
  //   description: "Descripcion",
  //   price: 50444,
  //   imageUrl: "https://d1ih8jugeo2m5m.cloudfront.net/2022/12/productos-mas-vendidos-del-mundo.jpg"
  // } ]
  useEffect( () => {
    const getProductsFromDB = async () => {
      const axiosRes = await axiosClient.get( '/products' )
      setProducts( axiosRes.data )
    }
    try {
      getProductsFromDB()
    } catch ( error ) {
      console.error( error )
      alert( error.message )
    }
  }, [] )
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Catálogo de productos de { user?.fullName || "invitado" }</h1>
        </Col>
      </Row>
      <Row>
        { products.map( product => {
          return <Col key={ product._id }>
            <ProductCard product={ product } productViewPath={ `/products/${ product._id }` }></ProductCard>
          </Col>
        } )
        }
      </Row>
    </Container>

  )
}

export default Products