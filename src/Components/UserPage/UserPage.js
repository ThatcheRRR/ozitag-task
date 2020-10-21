import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions';
import './userpage.scss';

const UserPage = () => {
  const user = useSelector(state => state.user);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  return(
    <div className = 'user-page'>
      <div className = 'user-page__info info'>
        <div className = 'info__header'>
          Name
        </div>
        <div className = 'info__description'>
          {user.name}
        </div>
      </div>
      <div className = 'user-page__info info'>
        <div className = 'info__header'>
          Email
        </div>
        <div className = 'info__description'>
          {user.email}
        </div>
      </div>
      <button className = 'user-page__logout' onClick = {() => dispatch(logout(token))}>Logout</button>
    </div>
  )
};

export default UserPage;
