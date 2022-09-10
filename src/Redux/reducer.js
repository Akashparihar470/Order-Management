

import React from 'react'
import { DEL_DATA_FAL, DEL_DATA_REQ, DEL_DATA_SUC, GET_DATA_FAL, GET_DATA_REQ, GET_DATA_SUC, POST_DATA_FAL, POST_DATA_REQ, POST_DATA_SUC } from './action';

const initstate = {
    isLoading: false,
    isError: {},
    Alldata: [],
    Deleteddata:{},
    Postdata:{}
}

const reducer=(state = initstate,action)=> {
  const {type, payload} = action;

  switch(type){
    case  GET_DATA_REQ :
        return{
            ...state,
            isLoading:true,
        }
    case  GET_DATA_SUC :
        return{
            ...state,
            isLoading:false,
            Alldata:payload
        }    
    case  GET_DATA_FAL :
        return{
            ...state,
            isLoading:false,
            isError:payload,
        }
    case  DEL_DATA_REQ :
        return{
            ...state,
            isLoading:true,
        }
    case  DEL_DATA_SUC :
        return{
            ...state,
            isLoading:false,
            Deleteddata:payload
        }    
    case  DEL_DATA_FAL :
        return{
            ...state,
            isLoading:false,
            isError:payload,
        }    
    case  POST_DATA_REQ :
        return{
            ...state,
            isLoading:true,
        }
    case  POST_DATA_SUC :
        return{
            ...state,
            isLoading:false,
            Postdata:payload
        }    
    case  POST_DATA_FAL:
        return{
            ...state,
            isLoading:false,
            isError:payload,
        }    
    default:
        return{
            ...state
        }    
  }
}

export default reducer