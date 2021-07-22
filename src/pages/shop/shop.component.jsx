import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    console.log(" componentDidMount Shop")
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
    console.log("fetchCollectionsStart called")
  }

  render() {
    const { match } = this.props;
    console.log("render in shop")
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  console.log("mapDispatchToProps in shop")
  return ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})};

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);