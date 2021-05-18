/*
 * @Descripttion: 
 * @version: 
 * @Author: Qyc
 * @Date: 2021-05-17 15:46:07
 * @LastEditors: Qyc
 * @LastEditTime: 2021-05-18 09:57:10
 */

import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
function MoreBody(): React.ReactElement {
    const history = useHistory();
    const dispatch = useDispatch();
    const routeName = useSelector((state: { routeName: string; }) => state.routeName);
   
    console.log(history); 
       
    const changeRoute = () => {
        let name  = 'message';
        dispatch({type:'ROUTENAME',data:name});
        console.log(routeName);
        history.push(name);
      };
    return (
      <div className="home">
        <button onClick={() => {changeRoute();}}>message</button>
        MoreBody
      </div>
    );
  }

  export default MoreBody;