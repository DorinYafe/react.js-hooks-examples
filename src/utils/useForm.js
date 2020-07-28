import React from 'react';

export const useForm = initialValues => {
    const [values, setValuse,] = React.useState(initialValues);

    return [
        values,
        e => {
            setValuse({
                ...values,
                [e.target.name]: e.target.value
            });
        },
    ];
};