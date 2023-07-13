import React, {useContext, useState} from 'react'
import { store } from './App'

const ComponentB = () => {
    const[data, setData] = useContext(store)
    const[name, setName]= useState()
    const submitHandler = e => {
        e.preventDefault();
        setData([...data, {brandname:name}])

    }
  return (
    <div>
       <h1>component B {data.map(item => <h3>{item.brandname}</h3>)}</h1>
       <form onSubmit={submitHandler}>
        <input type="text" name="brand" onChange={e => setName(e.target.value)}/>
        <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default ComponentB
