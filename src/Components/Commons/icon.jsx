import React from "react";
import '../CSS/loginForm.css';
import { Link } from 'react-router-dom';

const Icon = ({ src, id, onHover, onHoverLeave, param, dest }) => {
  return (
    <Link onMouseOver={() => onHover(param)} onMouseLeave={onHoverLeave} to={dest} className='icon'>
        <img src= {src} id={id} className='icon'/>
    </Link>
  );
};

export default Icon;