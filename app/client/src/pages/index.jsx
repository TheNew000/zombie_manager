import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Locations from './locations';
import { PageContainer } from '../components';

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Locations path="/" />
        </Router>
      </PageContainer>
    </Fragment>
  );
}
