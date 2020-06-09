import { connect } from 'react-redux';

import { fetchAllBusinesses, searchBusinesses } from '../../actions/business_actions';
import BusinessIndex from './business_index';

const mapStateToProps = ( { entities, session } ) => ({
    businesses: Object.values(entities.businesses),
    // currentUser: entities.users[session.id],
});

const mapDispatchToProps = ( dispatch ) => ({
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
    searchBusinesses: (query) => dispatch(searchBusinesses(query))
    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);