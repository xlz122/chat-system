import React, { useState } from 'react';
import { Route, useHistory, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import messageBody from '../message/index';
import moreBody from '../more/index';
import friendListBody from '../friendList/index';
import './index.scss';

import defaultAvatar from '@/static/login/default-logo.png';
import messageIco from '@/static/img/menu-message-normal@2x.png';
import messageIcoActive from '@/static/img/menu-message-down@2x.png';
import contactIco from '@/static/img/menu-contact-normal@2x.png';
import contactIcoActive from '@/static/img/menu-contact-down@2x.png';
import moreIco from '@/static/img/menu-more-normal@2x.png';
import moreIcoActive from '@/static/img/menu-more-down@2x.png';
import addPanel from '@/static/img/create_discuss_simple@2x.png';
import searchPanel from '@/static/img/search_editText@2x.png';

const imgRequre: any = {
  searchImg: 'block',
  searchContent: '',
  addBackground: '#ffffff',
  leftIco: 'none',
  iconStatus: {
    more: false,
    message: true,
    friendList: false
  }
};

function CommonBody(): React.ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();
  const routeName = useSelector(
    (state: { routeName: string }) => state.routeName
  );

  const [searchIcon, setsearchIcon] = useState(true); //搜索的图标
  const [searchContent, setsearchContent] = useState(''); //搜索的内容
  const [leftIco, setleftIco] = useState(true); //左上角图标

  const changeRoute = (clickName: string) => {
    let name = clickName;
    dispatch({ type: 'ROUTENAME', data: name });
    console.log(routeName);
    history.push(name);
    for (let key in imgRequre.iconStatus) {
      if (key !== clickName) {
        imgRequre.iconStatus[key] = false;
      } else {
        imgRequre.iconStatus[key] = true;
      }
    }
  };
  return (
    <div className="commonBody">
      <span>CommonBody</span>
      <div className="top-panel">
        <div className="left-panel">
          <div
            className="icon-panel"
            onMouseOver={() => {
              setleftIco(true);
            }}
            onMouseLeave={() => {
              setleftIco(false);
            }}
          >
            <div className="fillet-ico-panel close-ico">
              {leftIco && (
                <img src={require('@/static/img/close.png')} alt="" />
              )}
            </div>

            <div className="fillet-ico-panel mini-ico">
              <img src="@/static/img/min.png" alt="" />
            </div>
            <div className="fillet-ico-panel max-ico">
              <img src="@/static/img/max.png" alt="" />
            </div>
          </div>
          <div className="search-panel">
            <div className="search">
              {searchIcon && <img src={searchPanel} alt="" />}
              <label>
                <input
                  type="text"
                  onFocus={() => {
                    setsearchIcon(false);
                  }}
                  onBlur={() => {
                    if (searchContent) setsearchIcon(true);
                  }}
                  onChange={(e: any) => {
                    setsearchContent(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="add-panel">
              <img src={addPanel} alt="" />
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="function-switching-panel">
            <div
              className="main-ico-area"
              onClick={() => {
                changeRoute('message');
              }}
            >
              <img
                src={
                  imgRequre.iconStatus.message ? messageIcoActive : messageIco
                }
                alt="消息"
              />
            </div>

            <div
              className="main-ico-area"
              onClick={() => {
                changeRoute('friendList');
              }}
            >
              <img
                src={
                  imgRequre.iconStatus.friendList
                    ? contactIcoActive
                    : contactIco
                }
                alt="好友列表"
              />
            </div>
            <div
              className="main-ico-area"
              onClick={() => {
                changeRoute('more');
              }}
            >
              <img
                src={imgRequre.iconStatus.more ? moreIcoActive : moreIco}
                alt="更多"
              />
            </div>
          </div>
          <div className="avatar-area-panel">
            <div className="status-panel" />
            <div className="avatar-panel">
              <img alt="头像" src={defaultAvatar} />
            </div>
          </div>
        </div>
      </div>
      {routeReder()}
    </div>
  );
}

const routeReder = () => {
  return (
    <Switch>
      <Route path="/commonBody" exact={true} />
      <Route path="/commonBody/message" exact={true} component={messageBody} />
      <Route
        path="/commonBody/friendList"
        exact={true}
        component={friendListBody}
      />
      <Route path="/commonBody/more" exact={true} component={moreBody} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
};
export default CommonBody;
