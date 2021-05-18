/*
 * @Descripttion: 
 * @version: 
 * @Author: Qyc
 * @Date: 2021-05-17 15:46:07
 * @LastEditors: Qyc
 * @LastEditTime: 2021-05-18 11:26:26
 */

import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
function MessageBody(): React.ReactElement {
    const history = useHistory();
    const dispatch = useDispatch();
    const routeName = useSelector((state: { routeName: string; }) => state.routeName);
    const [ButtonRoute, setButtonRoute] = useState(routeName);
    console.log(history); 
       
    const changeRoute = () => {
        let name  = 'more';
        dispatch({type:'ROUTENAME',data:name});
        console.log(routeName);
        history.push(name);
      };
    return (
      <div className="home">
        <button onClick={() => {changeRoute();}}>message</button>
          messageBody
      </div>
    );
  }

  export default MessageBody;