import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Postdata } from '../Redux/action';
import "../styles/Form.css"

function Form() {
    var [item , setItem] = useState("");
    const [data,setData] = useState("");
    const dispatch = useDispatch();
    const maindata = useSelector(store=>store);
    const nav = useNavigate();

    const handleitem = (e) =>{
        var {name,value} = e.target;
        setItem({
            ...item,[name]:value
        })
    }
    const handlechange = (e) =>{
        var {name,value} = e.target;
        setData({
            ...data,[name]:value
        })
    }

    const create={
        "id": data.id,
        "createdAt": data.createdAt,
        "createdBy": data.createdBy,
        "orderDescription": data.orderDescription,
        "countOfItemTypes":item,
      }


    const handlesubmit = () =>{
        dispatch(Postdata(create));
        nav("/", { replace: true });
    }
    console.log(maindata)
  return (
    <div>
        <div className='form'>
            <h1>Post Data</h1>
           <input type="number" name='id' placeholder='id' onChange={handlechange}/>
           <input type="date" name='createdAt' placeholder='createdAt' onChange={handlechange}/>
           <input type="text" name='createdBy' placeholder='createdBy' onChange={handlechange}/>
           <input type="text" name='orderDescription' placeholder='Order Desceiption' onChange={handlechange}/>
           <input type="text" name='apparel' placeholder='Apparel' onChange={handleitem}/>
           <input type="text" name="glocery"  placeholder='grocery'onChange={handleitem}/>
           <button onClick={handlesubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Form