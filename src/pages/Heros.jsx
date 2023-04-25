

import Header from '../organisms/Header';
import CardContainer from '../organisms/CardContainer';
import useApiHeros from '../hooks/useApiHeros';

export default function Heros() {
  
  
  
  // const [items , setItems] =useState([]);
  // const [allItems , setAllItems] =useState([]);
  const {items , setItems , allItems , setAllItems} = useApiHeros();
  // useEffect(
  //   ()=>{
    
  //   //   fetch('https://www.superheroapi.com/api.php/9787633674583710/2')
  //   // .then(response=>response.json())
  //   // .then(data=> {setAllItems([data]);setItems([data]);console.log(data)})
  //   },[items,allItems])
  //   console.log(items);


  return (
    <div className='heros'>
      <Header/>
      <CardContainer items={items}  setItems={setItems}  allItems={allItems}  setAllItems={setAllItems} />
    </div>
  )
}
