import React from 'react';

import { connect } from 'react-redux';

import { routeDispatchFunctions } from '../store/actions'

const { pushRoute } = routeDispatchFunctions;

interface IEntryProps {
  pushRoute: any
}

const Entry: React.FunctionComponent<IEntryProps> = ({ pushRoute}) => {

  return <>
    Entry page, maybe form (Formik?) here

    <button onClick={() => pushRoute('/newroute')}>dispatch example</button>
  </>;
};

function mapStateToProps(state: any) {
  return { routes: state.posts };
};

const mapDispatchToProps = {
  pushRoute
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry);