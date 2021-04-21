import React from 'react'
import TableItem from '../table-item/table-item.jsx';

const Tablepreview=({collections})=>(
    <div className="">
    {collections.map(({title,items,status})=>(
        <TableItem Key={collections.id} title={title} status={status} items={items}/>
    ))}

    </div>
)
   

 export default Tablepreview
