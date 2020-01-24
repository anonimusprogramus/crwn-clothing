import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../../pages/collection/collection.component'

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route path={`${match.path}`} exact component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)

export default ShopPage
