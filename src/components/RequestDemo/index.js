import React from 'react'
import { Container,FormWrap, Icon, FormInput, FormContent, Form, FormButton, FormH1, FormLabel, Text } from './RequestDemoElements'


const RequestDemo = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'></Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>SEE HOW VOIRO WORKS - REQUEST A DEMO</FormH1>
                            <FormLabel htmlFor="for">First Name*</FormLabel>
                            <FormInput type="text" required placeholder= "Enter your First Name"/>
                            <FormLabel htmlFor="for">Last Name*</FormLabel>
                            <FormInput type="text" required placeholder = "Enter your Last Name" />
                            <FormLabel htmlFor="for">Work Email*</FormLabel>
                            <FormInput type="email" required placeholder="abc@example.com" />
                            <FormLabel htmlFor="for">Phone number*</FormLabel>
                            <FormInput type="text" required placeholder ="00000 00000"/>
                            <FormLabel htmlFor="for">Company Website*</FormLabel>
                            <FormInput type="text" required placeholder="example.com"/>
                            <FormLabel htmlFor="for">Country*</FormLabel>
                            <FormInput type="text" required placeholder="Drop down"/>
                            <FormLabel htmlFor="for">Annual Ad Revenue in USD*</FormLabel>
                            <FormInput type="text" required placeholder="Drop down" />
                            <FormButton type='submit'>Submit</FormButton>
                            <Text>*Required Field</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>  
        </>
    )
}

export default RequestDemo;
