import React from 'react';


import checkIcon from 'assets/register/check-icon.svg';
import { Link } from 'react-router-dom';

export default function DoneView() {
  return (
    <div className="done-view">
        <img className="view-icon" src={checkIcon} alt="check-icon"/>
        <span className="done-message">Done</span>
        <Link to="/">
            <span className="button">Return home</span>
        </Link>
    </div>
  );
}
