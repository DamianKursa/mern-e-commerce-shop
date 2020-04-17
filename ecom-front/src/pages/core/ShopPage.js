import React, {useState,useEffect} from 'react'
import Layout from '../../layouts/Main'
import Card from './Card'
import {getCategories} from '../../admin/apiAdmin'
import FiltersCheckbox from './FiltersCheckbox'
import FiltersPriceRange from './FiltersPriceRange'
import {prices} from './fixedPrices'

const ShopPage = () => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)
  const [myFilters, setMyFlters] = useState({
    filters: { category:[], price:[]}
  })
  const init = () =>{
    getCategories().then((data)=>{
      if(data.error){
        setError(data.error)
      }else{
        setCategories(data)
      }
    })
  }

  useEffect(
    
    () =>{

      init()

    },[]
  )

  const handleFilters = (filters, filterBy) =>{
    const newFilters = {...myFilters}
    newFilters.filters[filterBy] = filters
    
    if(filterBy == 'price'){
      let priceValues = handlePrice(filters)
      newFilters.filters[filterBy] = priceValues
    }
    setMyFlters(newFilters)
  }
  const handlePric = value => {
    const data = prices;
    let array = [];

    for (let key in data) {
        if (data[key]._id === parseInt(value)) {
            array = data[key].array;
        }
    }
    return array;
};
  const handlePrice = priceRange => {
    
    const data = prices; //Zaciągamy dane z prices czyli wszystkie ceny
    let array = []; //Tworzymy array gdzie bedzie przetrzymywane ceny
    
    for(let key in data){    //Teraz loopujemy przez wszystkie prices
      
      if(data[key]._id === parseInt(priceRange)){ ///Jezeli ID przedziału cen jest taki sam jak przekazujemy w value wtedy 
        
        array = data[key].array; // //Przypisujemy wartości z tego przedziału cen do tablicy i wyciągamy z inego tablice z przedziałem ceny  ,daje nam np. [0,9]
      }
    }
    return array;//i teraz zwracamy tą tablice
  }


  return (
    <div>
      <Layout title="Shop Page" description="Find your product" className= 'container-fluid'>
        <div className="row">
          <div className="col-4">
            <h4>Filter by Category</h4>
            <ul>
              <FiltersCheckbox 
              /*Tutaj musisz zwrocic tą funkcje dlatego masz funkcje w funkcji , inaczej filters bedą undefinded*/
               handleFilters={ filters => handleFilters(filters,'category')} 
               categories={categories}
               prices={prices}
               />
            </ul>
            <h4>Filter by Price</h4>
            <div>
              <FiltersPriceRange
                prices={prices}
                handleFilters={ filters => handleFilters(filters,'price')} 

              />
            </div>
          </div>
          <div className="col-8">
            {JSON.stringify(myFilters)}
            right sidebae
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ShopPage
