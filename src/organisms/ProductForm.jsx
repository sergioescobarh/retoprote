import "./productForm.scss";
// import useState from 'react';
export default function ProductForm({allItems, setItems , setAllItems , setPortal, portal}) {
  //  const [newProduct,setNewProduct] = useState({title:'',price:'',image:''});
  
  
  const submit =(event)=>{
    event.preventDefault();
    let product = 
    {title:event.target.title.value,
      price:event.target.price.value,
      image:event.target.image.value};
      let products = allItems;
      products.push(product);
      setAllItems(products);
      setItems(products);
      setPortal(!portal);
  };

  const exit = ()=>{
    setPortal(!portal);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="">Titulo del producto</label>
        <input  type="text" name="title" />
      </div>
      <div>
        <label htmlFor="">Precio</label>
        <input  type="text" name="price" />
      </div>
      <div>
        <label htmlFor="">url de la imagen</label>
        <input  type="text" name="image" />
      </div>
      <div className="manageButton">
        <button type="button" onClick={exit} >cancelar</button>
        <button type="submit"  >crear</button>
      </div>
    </form>
  );
}
