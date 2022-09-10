import axios from "axios";


export const GET_DATA_REQ = "GET_DATA_REQ";
export const GET_DATA_SUC = "GET_DATA_SUC";
export const GET_DATA_FAL = "GET_DATA_FAL";

export const DEL_DATA_REQ = "DEL_DATA_REQ";
export const DEL_DATA_SUC = "DEL_DATA_SUC";
export const DEL_DATA_FAL = "DEL_DATA_FAL";

export const POST_DATA_REQ = "POST_DATA_REQ";
export const POST_DATA_SUC = "POST_DATA_SUC";
export const POST_DATA_FAL = "POST_DATA_FAL";



const getdatarequest = () =>{
    return {
        type : GET_DATA_REQ,
    }
}
const getdatasuccess = (payload) =>{
    return {
        type : GET_DATA_SUC,
        payload
    }
}
const getdatafailure = (payload) =>{
    return {
        type : GET_DATA_FAL,
        payload
    }
}

const deletedatarequest = () =>{
    return {
        type : DEL_DATA_REQ,
    }
}
const deletedatasuccess = (payload) =>{
    return {
        type : DEL_DATA_SUC,
        payload
    }
}
const deletedatafailure = (payload) =>{
    return {
        type : DEL_DATA_FAL,
        payload
    }
}


const postdatarequest = () =>{
    return {
        type : POST_DATA_REQ,
    }
}
const postdatasuccess = (payload) =>{
    return {
        type : POST_DATA_SUC,
        payload
    }
}
const postdatafailure = (payload) =>{
    return {
        type : POST_DATA_FAL,
        payload
    }
}


export const Getdata = ()=>{
    return(dispatch)=>{
         dispatch(getdatarequest());
         axios("https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders").then(res=>dispatch(getdatasuccess(res.data)))
         .catch(err=>dispatch(getdatafailure(err)))
    }
}

export const Deletedata = (id)=>{
    return(dispatch)=>{
         dispatch(deletedatarequest());
         axios.delete(`https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders/${id}`).then(res=>dispatch(deletedatasuccess(res.data)))
         .then(()=>dispatch(Getdata()))
         .catch(err=>dispatch(deletedatafailure(err)))
    }
}

export const Postdata = (data)=>{
    return(dispatch)=>{
         dispatch(postdatarequest());
         axios.post(`https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders`,data)
         .then(res=>{
            dispatch(postdatasuccess(res.data))
            alert("Post Data successully")
        })
         .catch(err=>dispatch(postdatafailure(err)))
    }
}