import React from 'react'
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class LifeCycle extends React.Component {
    state = {
        count: 0
    }

    addOne = () => {
        const {count} = this.state
        this.setState({count: count + 1})
    }

    render() {
        const {count} = this.state
        return (
            <div id="test">
                <h2>当前求和为：{count}</h2>
                <button onClick={this.addOne}>+1</button>
            </div>
        )
    }
}


LifeCycle.propTypes = {
}

LifeCycle.defaultProps = {
}

export default LifeCycle