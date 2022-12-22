import React from 'react'
import Form from './components/form/Form'
import Header from './components/header/Header'
import List from './components/list/List'
import './App.css'
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListLink from './components/listLink/listLink'

const App = () => {
  const [list,setList]=useState([])
  return (
    <BrowserRouter>
      <Header/>
      <div className='row'>
        <Routes>
          <Route path='/list' element={<ListLink/>} ></Route>
        </Routes>
        <Form setList={setList} list={list} />
        <List list={list} setList={setList}/>
      </div>
    </BrowserRouter>
  )
}

export default App