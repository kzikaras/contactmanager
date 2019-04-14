import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {
    // use arrow function to avoid having to bind "this"
    onShowClick = () => {
        console.log('Hello');
    }
    render() {
        //destructuring
        // const { name, email, phone } = this.props;
        const { contact } = this.props;
        return (
            <div className="card card-body mb-3">
                <h4>{contact.name} <i onClick={this.onShowClick} className="fas fa-sort-down"></i></h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {contact.email}</li>
                    <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
            </div>
        )
    }
}
// validate prop types
Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;

