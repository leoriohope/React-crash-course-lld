import React from 'react'
import PropTypes from 'prop-types'

class PropsLearn extends React.Component {
    render() {
        const {name, age, sex} = this.props
        return (
            <ul>
                <li>姓名：{name}</li>
                <li>性别：{sex}</li>
                <li>年龄：{age}</li>
            </ul>
        )
    }
}

PropsLearn.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

PropsLearn.defaultProps = {
    sex: 'mix',
    age: 1
}

export default PropsLearn