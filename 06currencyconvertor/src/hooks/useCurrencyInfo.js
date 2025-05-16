import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        fetch(`https://v6.exchangerate-api.com/v6/0984bb2810bdf50216697e89/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res.conversion_rates) {
                    setData(res.conversion_rates);
                }
            })
            .catch((err) => console.error("Currency API error:", err));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
