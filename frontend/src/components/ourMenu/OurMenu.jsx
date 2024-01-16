import React, { useEffect, useState } from 'react'
import "./ourMenu.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { addFav } from '../../redux/slices/slice'
import axios from 'axios'
function OurMenu() {
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
   axios("http://localhost:3000/products").then((res)=>{
    setDatas(res.data)
   })
  }, []);
  const fav = useSelector((state) => state.products.fav)

  console.log(fav)
  return (
    <section id='OurMenu'>
    <div className="section-head">
    <FontAwesomeIcon icon={faUtensils} />
    <p>Our Menu
</p>
    </div>
   <div className="filter-head">
<p>Breakfast</p>
<p>Brunch</p>
<p>Lunch</p>
<p>Dinner</p>
   </div>
    <div className="items">
    <div className="box">
      {datas && datas.map((elem,i)=>{
        return <div key={i} className="item">
        <div className="item-head">
        <p>{elem?.name}</p>
        <FontAwesomeIcon onClick={()=>{
dispatch(addFav(elem))
        }} icon={faHeart} />
        </div>
        <div className="item-foot">
          <p>with wild mushrooms and asparagus	</p> <span>{elem?.price} $</span>
        </div>
        
      </div>
      })
      }
    
      
      
      
    </div>
    

    </div>
    <div className="button">
      <button>See More</button>
    </div>
  </section>
  )
}

export default OurMenu
