// components/ToastComponent/ToastComponent.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { clearMessage } from '../../redux/messageSlice';
import './ToastComponent.scss';

const ToastComponent = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.message);

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message.text) return null;

  return (
    <div className={`toast-message ${message.type}`}>
      {message.text}
    </div>
  );
};

export default ToastComponent;
