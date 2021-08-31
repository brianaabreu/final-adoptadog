import React, { useState } from 'react';
import MainFooter from './footer';
import Header from './header';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';


const NewPost = () => {

    const [dogName, setDogName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    axios.defaults.withCredentials = true;

    const posts = () => {
        axios.post('http://localhost:3001/adopt', {
            dogName: dogName,
            breed: breed,
            age: age,
            description: description,
            type: type,
        }).then((res) => {
            console.log(res)
        })

    }

    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '70PX', paddingBottom: '70px' }}>
                <h1 style={{ color: 'black', fontWeight: '100' }}> New Post </h1>
                <Form className="postWrapper">
                    <FormGroup>
                        <Label for="Name of dog">Dog Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="dogname"
                            placeholder="what's their name?"
                            onChange={(e) => {
                                setDogName(e.target.value);
                            }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Breed">Breed</Label>
                        <Input
                            type="text"
                            name="breed"
                            id="breed"
                            placeholder="what's their breed?"
                            onChange={(e) => {
                                setBreed(e.target.value);
                            }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input
                            type="text"
                            name="age"
                            id="age"
                            placeholder="(n/a if unsure)"
                            onChange={(e) => {
                                setAge(e.target.value);
                            }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="desc"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="type">Rehome or Rescue?</Label>
                        <Input type="select" name="select" id="type"
                            onChange={(e) => {
                                setType(e.target.value);
                            }}>
                            <option>Click for more</option>
                            <option>Rehoming</option>
                            <option>Rescue</option>
                        </Input>
                    </FormGroup>
                    <Button onClick={posts} style={{ marginTop: '25px', width: '50%' }}>Create Post</Button>
                </Form>

            </div>
            <MainFooter />
        </div>
    )
}

export default NewPost;