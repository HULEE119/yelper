export const postUser = (apple) => (
    $.ajax({
        method: 'POST',
        url: `/api/users`,
        data: { user: apple }
    })
);

export const postSession = (user) => (
    $.ajax({
        method: 'POST',
        url: `/api/session`,
        data: { user }
    })
);

export const deleteSession = () => (
    $.ajax({
        method: 'DELETE',
        url: `/api/session`
    })
);