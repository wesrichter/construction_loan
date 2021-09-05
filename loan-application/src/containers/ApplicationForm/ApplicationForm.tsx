import React, { Component } from 'react'

export default class ApplicationForm extends Component {

    render() {
        return (
            <form action="submit">
                <input itemType="text" id="firstName" value="First Name" />
                <input itemType="text" id="lastName" value="Last Name" />
                <input itemType="text" id="email" value="Email" />
                <input itemType="text" id="phone" value="Phone" />
                <select name="Zoning" id="zoning">
                    <option value="none" selected disabled hidden>
                        Zoning
                    </option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                </select>
                <select name="loanType" id="loanType">
                    <option value="none" selected disabled hidden>
                        Loan Type
                    </option>
                    <option value="Construction-To-Permanent">Construction-To-Permanent </option>
                    <option value="Construction-Only">Construction-Only</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Owner-Builder">Owner-Builder</option>
                    <option value="End">End</option>
                </select>
            </form>
        )
    }
}
