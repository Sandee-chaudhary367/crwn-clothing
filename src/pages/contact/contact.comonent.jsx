import React from 'react'
import Tablepreview from '../../components/table-preview/table-preview.jsx'
import data from '../shop/shop.data.js'

class Contact extends React.Component{
    constructor(){
        super();

        this.state={
            collections:data
        }
    }

    render(){
        const {collections}=this.state;
        return (  
            <Tablepreview collections={collections} />
        )  
    }
};
 

export default Contact;
