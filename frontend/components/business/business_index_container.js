import { connect } from 'react-redux';

import { fetchAllBusinesses } from '../../actions/business_actions';
import BusinessIndex from './business_index';

const mapStateToProps = ( { entities, session } ) => ({
    businesses: Object.values(entities.businesses),
    // currentUser: entities.users[session.id],
});

const mapDispatchToProps = ( dispatch ) => ({
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);