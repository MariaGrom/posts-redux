import React from 'react';
import { changeTheme } from './redux/action';
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn btn-dark"
      onClick={() => dispatch(changeTheme())}
    >
      Сменить тему
    </button>
  );
};
