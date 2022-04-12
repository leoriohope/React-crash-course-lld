import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Red button clicked')
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='red' text='Button Red' onClick={onClick}/>
        </header>)
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


export default Header