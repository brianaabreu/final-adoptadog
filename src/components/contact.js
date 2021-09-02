import React from 'react';
import MainFooter from './footer';
import Header from "./header";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



const Contact = () => {

    return (
        <div>
            <Header />
            <div className="contactPage">
                <Form className="contactWrapper" >
                    <h1 style={{ color: 'black' }}>Contact Us</h1>
                    <FormGroup>
                        <Label className="label" for="Name">Name</Label>
                        <Input type="name" name="name" id="name" placeholder="Whats your name?" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="label"  for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="label"  for="message">Message</Label>
                        <Input type="textarea" name="text" id="exampleText" placeholder="Your message here" />
                    </FormGroup>
                    <Button style={{ marginTop: '25px', width: '50%' }}>Submit</Button>

                </Form>
            </div>
            <MainFooter />
        </div >
    )
}

export default Contact;