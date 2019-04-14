import React, { Component } from 'react'
import Contact from './Contact';
class Contacts extends Component {

    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Karen Williams',
                email: 'kwilliams@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 3,
                name: 'Henry Johnson',
                email: 'Henry@gmail.com',
                phone: '555-555-5555'
            }
        ]
    }
    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact => (
                    // <Contact name={contact.name} email={contact.email} phone={contact.phone} key={contact.id} />
                    <Contact key={contact.id} contact={contact} />
                ))}
            </div>
        )
    }
}

export default Contacts;
