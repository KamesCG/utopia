/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
// import idx from './idx'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Flex, Button, Heading, Link, ReduxField, Paragraph } from 'atomic'
import Form from 'molecules/Form'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) =>
<Form {...styled}>
    {/* <Field 
    name="username" 
    placeholder="Username" 
    component={ReduxField}
    type="text"
    {...StyleFieldDefault} 
    h={[40,50]}
    />
    <Field 
    name="password" 
    placeholder="Password" 
    component={ReduxField}
    type="password"
    {...StyleFieldDefault} 
    h={[40,50]}
    /> */}
    <Link to="/dashboard" ><Button gradient='blue' width={1}>Login</Button></Link>
    <Paragraph color='blue' f={[1]} ta='center' pt={35} >
        <Link>Reset Password</Link>
    </Paragraph>
</Form>
