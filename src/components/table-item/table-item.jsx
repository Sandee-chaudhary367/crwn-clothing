import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './table-item.styles.scss'

const TableItem=({title,items})=>(
    <div  className="">
    <h1>{title.toUpperCase()}</h1>
    <Table bordered >
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Prices</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({id,name,price,status})=>(
                <tr className={`${status}`}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
            ))} 
        </tbody>
    </Table>
    </div>
)

export default TableItem;