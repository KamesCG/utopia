/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
// import idx from './idx'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Flex, Button, Heading, Paragraph, Span, ReduxField } from 'atomic'
import Form from 'molecules/Form'
import StyleFieldDefault from 'static/style/StyleFieldDefault'

const Addons = [
    {
        name: 'support',
        label:'Extended support to 12 months',
        price:'$75'
    },
    {
        name: 'identity',
        label:'Decentralized Identity integration',
        price:'$155'
    },
    {
        name: 'mobile',
        label:'Mobile Application Boilerplate',
        price:'$400'
    },
]

/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) =>
<Form {...styled}>
    <Box>
        {Addons.map((item, key)=><AddonCheckbox key={key} {...item}/> )}
    </Box>
    <Flex justify='space-between' mt={[15,20]} >
        <Button bg='red'>Add To Cart</Button>
        <Button bg='green'>Buy Now</Button>
    </Flex>
</Form>


const AddonCheckbox = props =>(
<Flex>
    <Field 
    name={props.name}
    component={ReduxField} type="checkbox"
    w={[20,25]}
    />
    <Flex justify='space-between'>
        <Paragraph f={[1]} mb={0} w={[1,1,0.9]}>
            {props.label}
        </Paragraph>
        <Span color='green'>{props.price}</Span>
    </Flex>
</Flex>
)