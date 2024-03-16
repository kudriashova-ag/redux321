import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addProduct, changeProduct, removeProduct } from './slices/ProductSlice';

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();


  const createProduct = () => {

    const newProduct = {
      id: 3,
      name: 'Product 3',
      price: 111
    };

    dispatch(addProduct(newProduct));

  }

  const updateProduct = () => {

    const newProduct = {
      id: 1,
      name: '111111',
      price: 33
    };

    dispatch(changeProduct({ id: 1, product: newProduct }));

  }

  return (
    <div>

      <button onClick={createProduct}>Create Product</button>
      <button onClick={updateProduct}>Update Product</button>

      {products.map(product => <div key={product.id}>
        <h4>
          {product.name}, {product.price}
          <button onClick={() => dispatch(removeProduct(product.id))}>Remove</button>
        </h4>
      </div>)}
    </div>
  );
}

export default App;
