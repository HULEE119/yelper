export const fetchBusinesses = () => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses`
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