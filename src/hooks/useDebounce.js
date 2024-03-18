import React from 'react';
import { useState, useEffect } from 'react';

function useDebouce(value, delay) {
    const [deboundcedValue, setDeboucedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDeboucedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);

    return deboundcedValue;
}

export default useDebouce;
