import React from 'react';
import './card.css'

const Card = ({ movieData,setList,list }) => {
  //#region 
    const addToListData=(title)=>{
      const result = list.includes(title);
        if(!result){
          setList([...list, title])
        }
          
      
    }
  //#endregion
  return (
    <>
      {
        movieData.map(item => {

          return (
            <div className='card'>
             <img src={item.Poster} alt={item.Title} className='movieImg'/>
              <div className="desc">
                <h1>{item.Title}</h1>
                <button className='addListData' onClick={() => { addToListData(item.Title) }}>Add to List</button>
              </div>
              
            </div>
          )

        })
      }
    </>

  )
}

export default Card