// The React import is no longer needed in the newer versions of React, still useful to
// have when working with bigger projects, will leave commented out for now.
//import React from "react";

// Import Similar to how TS uses Types
import PropTypes from 'prop-types'
import Button from './Button';


const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='blue' text='Add'/>
        </header>
    )
};

// Default Props for when you dont know which prop you want to use, will be overridden when props are passed into it
Header.defaultProps = {
    title: 'Task Tracker',
}

// Defines the prop type similar to how typescript does
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;