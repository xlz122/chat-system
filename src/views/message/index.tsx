import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MessageBody(): React.ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();
  const routeName = useSelector(
    (state: { routeName: string }) => state.routeName
  );
  // const [ButtonRoute, setButtonRoute] = useState(routeName);
  console.log(history);

  const changeRoute = () => {
    let name = 'more';
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
        messageBody
      </button>
      <p>messageBody</p>
    </div>
  );
}

export default MessageBody;
