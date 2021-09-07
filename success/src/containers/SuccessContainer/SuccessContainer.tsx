import React, { Component } from 'react'

import './styles.css'
import builtImg from '../../assets/built.svg'


export default class SuccessContainer extends Component {

    render() {
        const successName: string = localStorage.getItem('formFirstName')
        return (
            <div className="mainContainer">
                <img src={builtImg} alt="built logo" />
                <h3>Congrats!</h3>
                <p>{successName}, you have submitted the form successfully.</p>
                <a href="/loan-application">Submit Another Application</a>
            </div>
        )
    }
}