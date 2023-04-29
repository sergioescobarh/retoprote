import './card.scss';


export default function Cards({image,title,price,id, items,allItems, setItems, setAllItems}) {
  
    const deletOne = ()=>{
     const remainingProducts = allItems;
     console.log('este es',remainingProducts.filter((i)=> i.id!==id));
     setAllItems(remainingProducts.filter((i)=> i.id!==id));
     setItems(remainingProducts.filter((i)=> i.id!==id));
    };

  return (
    <div className='card'>
        <img className='img' src={image} alt="" />
        <h4>{title}</h4>
        <div>{price}$</div>
        <button type='button' onClick={deletOne}>Eliminar</button>
    </div>
  )
}
