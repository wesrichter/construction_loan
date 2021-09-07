import React, { Component } from 'react'

import ApplicationForm from '../../components/ApplicationForm/ApplicationForm'
import './styles.css'
import builtImg from '../../assets/built.svg'

export default class LoanApplication extends Component {

    render() {
        return (
            <div className="mainContainer">
                <div className="loanContainer">
                    <img src={builtImg} alt="built logo" />
                    <h3>Construction Loan Application</h3>
                    <ApplicationForm />
                </div>
            </div>
        )
    }
}