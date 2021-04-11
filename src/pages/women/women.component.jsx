import React from 'react'
import SHOP_DATA from '../shop/shop.data'
import CollectionPreview from '../../components/collection-preview/preview-all';

class Women extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        collections: SHOP_DATA
      };
    }

    render(props) {
      console.log(this.props);
      const { id,...otherCollectionProps} = this.state.collections[this.props.match.params.number];
      return (
        <div className='shop-page'>
            <CollectionPreview key={id} {...otherCollectionProps} />
        </div>
      );
    }
  }
  
  export default Women;