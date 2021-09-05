import React, { Component } from 'react'

import './styles.css'
import builtImg from '../../assets/built.svg'

export default class SuccessContainer extends Component {

    render() {
        return (
            <div className="mainContainer">
                <img src={builtImg} alt="built logo" />
                <h3>Congrats!</h3>
                <p>Wes, you have submitted the form successfully.</p>
            </div>
        )
    }
}