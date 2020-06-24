export const fetchBusinesses = (filters) => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses`,
        data: { filters }
    })
);

export const fetchBusiness = (businessId) => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}`
    })
);

export const fetchReviews = (businessId) => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews`,
        data: { business_id: businessId }

    })
);

export const fetchAllReviews = () => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews`
    })
);

export const createReview = (review) => (
    $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: { review }
    })
);

export const searchBusinesses = ( query ) => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/search`,
        data: { query: query }
    })
); 