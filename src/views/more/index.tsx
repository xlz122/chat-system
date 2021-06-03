import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MoreBody(): React.ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();
  const routeName = useSelector(
    (state: { routeName: string }) => state.routeName
  );

  console.log(history);

  const changeRoute = () => {
    let name = 'message';
    dispatch({ type: 'ROUTENAME', data: name });
    console.log(routeName);
    history.push(name);
  };
  return (
    <div className="home">
      <button
        onClick={() => {
          changeRoute();
        }}
      >
        message
      </button>
      <p>MoreBody</p>
    </div>
  );
}

export default MoreBody;
