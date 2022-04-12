import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ color, text, onClick }) => {
    return (
        <button
            className='btn'
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.defaultPros = {
    color: 'black',
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button