import * as BusinessApiUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveAllBusinesses = (businesses) => ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses 
});

const receiveBusiness = (business) => ({
    type: RECEIVE_BUSINESS,
    business 
}); 

export const fetchAllBusinesses = () => dispatch => (
    BusinessApiUtil.fetchBusinesses()
        .then( businesses => dispatch(receiveAllBusinesses(businesses)))
);

export const fetchBusiness = (businessId) => dispatch => (
    BusinessApiUtil.fetchBusiness(businessId)
        .then( business => dispatch(receiveBusiness(business)))
);

export const searchBusinesses = (query) => dispatch => (
    BusinessApiUtil.searchBusinesses(query)
        .then( businesses => dispatch(receiveAllBusinesses(businesses)))
);