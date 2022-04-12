import React from 'react'

class StateLearn extends React.Component {
    state = {isHot: false}


    render() {
        const {isHot} = this.state
        return <h1 onClick={this.changeWhether}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>;
    }

    changeWhether = () => {
        console.log(this)
        let {isHot} = this.state
        this.setState({isHot:!isHot})
    }
}


export default StateLearn