import React from 'react'
import './myContact.css'
import ContactHome from '../../components/contactHome/ContactHome'
import PageTitle from '../../components/PageTitle'
export default function MyContact() {
    return (
        <div>
            <PageTitle title="contact us"/>
            <ContactHome/>
        </div>
    )
}
