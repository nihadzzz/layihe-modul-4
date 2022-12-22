import React from 'react';
import { useState } from 'react';
import { getMovieData } from '../../services/db';
import Card from '../card/Card';
import './form.css'

//#region Formdan datanin alinib servere gonderilmesi
const Form = ({setList,list}) => {
  const [data, setData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.movieName.value){
      const result = await getMovieData(e.target.movieName.value);
      setData(result);
    }
    
  }
  //#endregion


  return (
    <div className='form-row'>
    
        <form onSubmit={handleSubmit}>
          <label htmlFor="moviename">Search movie by title:
            <input type="text" id='moviename' name='movieName' required />
          </label>
          <button type='submit' className='search' >Search</button>
        </form>
      <div>
       <Card movieData={data} setList={setList} list={list}/>
      </div>
    </div>
  )
}

export default Form;