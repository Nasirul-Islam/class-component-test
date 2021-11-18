import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div style={{ border: '1px solid red', margin: '10px' }}>
                <h2>Name: {this.props.user.name}</h2>
                <h4>Email: {this.props.user.email}</h4>
                <button
                    onClick={(e) => this.props.handleAddtocart(this.props.user)}>Add to cart</button>
            </div>
        )
    }
}
