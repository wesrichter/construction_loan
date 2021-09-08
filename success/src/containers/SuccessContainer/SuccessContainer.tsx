import React, { Component } from 'react'
import builtImg from '../../assets/built.svg'
import './styles.css'

export default class SuccessContainer extends Component {

    render() {
        const successName: string = localStorage.getItem('formFirstName')
        return (
            <div data-testid='test-1' className="mainContainer">
                <img src={builtImg} alt="built main" />
                <h3>Congrats!</h3>
                <p>{successName}, you have submitted the form successfully.</p>
                <a href="/loan-application">Submit Another Application</a>
            </div>
        )
    }
}