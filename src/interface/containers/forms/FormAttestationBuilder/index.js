import React, { Component } from 'react';
import FormBuilder from 'react-form-builder2';
 
export default class Tree extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      treeData: [{ title: 'Chicken', children: [{ title: 'Egg' }] }],
    };
  }
 
  render() {
    return (
      // <FormBuilder/>
      <div>
      
      </div>
    );
  }
}