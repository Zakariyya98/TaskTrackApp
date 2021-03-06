import PropTypes from 'prop-types'
import Button from './Button';
import  { useLocation } from 'react-router-dom';
 

const Header = ({ title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button 
            color={showAdd ? 'blue' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} />}
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