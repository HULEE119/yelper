import { connect } from 'react-redux';

import { fetchAllBusinesses } from '../../actions/business_actions';
import BusinessIndex from './business_index';

const mapStateToProps = ( state ) => ({
    businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = ( dispatch ) => ({
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);