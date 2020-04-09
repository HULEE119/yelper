export const fetchBusinesses = () => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses`
    })
);

export const fetchBusiness = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/${id}`
    })
);

export const fetchReviews = (bizId) => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews`,
        data: { business_id: bizId }

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