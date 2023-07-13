import React, {useContext} from 'react';
import { store } from './App';

const ComponentA = () => {
    const[data, setData] = useContext(store)
  return (
    <div>
      <h1>component A {data.length}</h1>
    </div>
  )
}

export default ComponentA
