import React, { useEffect, useState } from 'react'
import axios from 'axios';

const SearchImages = ({addImage}) => {
    const [searchItem,setSearchItem]=useState("laptop");
    // console.log("access:",process.env.REACT_APP_ACCESS_KEY);
    
useEffect(()=>{
    getImages();
},[])

function getImages(){
    axios.get("https://api.unsplash.com/search/photos",{
        params:{
            client_id:process.env.REACT_APP_ACCESS_KEY,
            query :searchItem
        }
    }).then(response =>addImage(response.data.results))
 .catch(error =>console.log(error))
}


function reset(){
    setSearchItem("");
    addImage([]);

}


    return (
    <div className='inputbox'>
        <input type="text" placeholder = "Search Images"
        onChange={e=>setSearchItem(e.target.value)}
        value={searchItem}
        />
        <button onClick={getImages}>Search</button>
<button onClick={reset}>clear</button>
    </div>
  )
}


export default SearchImages