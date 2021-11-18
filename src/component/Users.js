import React, { Component } from 'react'
import User from './User';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            // if you want to use more state
            cart: [],
            name: '',
            email: ''
        }
        this.handleAddtocart = this.handleAddtocart.bind(this)
    }

    handleAddtocart(user) {
        const newCart = [...this.state.cart, user];
        this.setState({ cart: newCart });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({ users: data }))
    }

    render() {
        return (
            <div>
                <h2>This is User: {this.state.users.length}</h2>
                <h3>Cart: {this.state.cart.length}</h3>
                {
                    this.state.users.map(user => <User
                        key={user.id}
                        user={user}
                        handleAddtocart={this.handleAddtocart}
                    ></User>)
                }
            </div>
        )
    }
}
