import React from 'react'
import { useRef } from 'react'
import './list.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const List = ({ list, setList }) => {
  const listInput = useRef()
  //#region  remove data
  const removeDatafromList = (title) => {
    const index = list.indexOf(title);
    list.splice(index, 1);
    setList([...list]);
  }
  //#endregion

  //#region gotoList
  const [value, setValue] = useState('');
  const goToList = () => {
    if (listInput.current.value.length != 0) {
      setValue(listInput.current.value)
    }
  }
  //#endregion

  return (
    <div className='list'>
      <div className='blog-list'>
        <input ref={listInput} style={{ marginBottom: '5px' }} type="text" placeholder='Enter the list name' className='list-input' />
        <ul>
          {
            list?.map(item => {
              return (
                <>
                  <div className="list-ul" style={{ display: 'flex' }}>
                    <li style={{ width: '166px', marginBottom: '10px' }}>{item}</li>
                    <button style={{ height: '20px' }} onClick={() => { removeDatafromList(item) }}>X</button>
                  </div>
                </>
              )
            })
          }
        </ul>
        {
          value.length > 0 ? <Link to={'/list'}>go to list</Link> : <button onClick={goToList} className='list-button'>Save List</button>
        }
      </div>
    </div>
  )
}

export default List