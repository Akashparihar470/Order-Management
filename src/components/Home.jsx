import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Deletedata, Getdata } from '../Redux/action';
import Navbar from './Navbar';
import "../styles/Home.css"
import { Link } from 'react-router-dom';

function Home() {
    var data = useSelector(store=>store.Alldata);
    var [search,setSearch] = useState("");
    var dispatch = useDispatch();

    useEffect(()=>{
        dispatch(Getdata())
    },[dispatch])


    const handlesearch = (e) =>{
      setSearch(e.target.value)
    }

    const handledelete = (id) =>{
        dispatch(Deletedata(id));
    }

    // const percentage = (e)=>{
    //   return data.reduce((t,e)=>console.log(t,e))
    // };

    console.log(data)
  return (
    <div>
        <Navbar/>
        <div className='container'>
               <div className='heading'>
                  <h1>Order Management system</h1>
                  <input className='search' type="text" placeholder='Search by Order Description' onChange={handlesearch}/>
               </div>
               <table>
                  <thead>
                     <tr>
                      <th>Order Id</th>
                      <th>Order Description</th>
                      <th>Count Of Item Types included in Order</th>
                      <th>% of items in apparel</th>
                      <th>Created By </th>
                      <th>Created Date</th>
                      <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                    {
                      data.filter(e=>e.orderDescription.toLowerCase().includes(`${search}`)).map(e=>
                        <tr key={e.id}>
                          <td>{e.id}</td>
                          <td><p>{e.orderDescription}</p></td>
                          <td><div className='item'><p>Apparel : {e.countOfItemTypes.apparel}</p><p>Grocery : {e.countOfItemTypes.grocery}</p></div></td>
                          <td>{Math.floor(e.countOfItemTypes.apparel/data.reduce((total, item)=>total+item.countOfItemTypes.apparel,0)*100)}%</td>
                          <td>{e.createdBy}</td>
                          <td>{e.createdAt}</td>
                          <td><button onClick={()=>handledelete(e.id)}>Delete</button></td>
                        </tr>
                      )
                    }
                  </tbody>
               </table>
               <div className='orderbut'>
                  <Link to={"/form"}><button className='createbut'>Create New Order</button></Link>
               </div>
        </div>
    </div>
  )
}

export default Home


