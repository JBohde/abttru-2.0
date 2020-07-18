import React from 'react';

const linkStyle = {
  color: 'black',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25)'
};

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({
  type = 'default',
  className,
  children,
  onClick,
}) => (
    <button
        style={linkStyle}
        onClick={onClick}
        className={['btn btn-lg', `btn-${type}`, className].join(' ')}
    >
        {children}
    </button>
);

export default Button;
