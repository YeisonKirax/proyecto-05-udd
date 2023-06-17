import { useParams } from 'react-router-dom';
import { ProductView } from '../../../components/ProductView/ProductView.jsx';

export const Product = () => {
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
  const { productId } = useParams()
  // Llamar API para obtener un producto por id (/products/:id)
  const product = products.find( product => product.id === productId )
  return (
    <ProductView className="mt-2" product={ product }></ProductView>
  )
}

export default Product