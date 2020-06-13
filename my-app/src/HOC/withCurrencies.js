import React, { Component } from 'react';
import CurrenciesContext from '../context/currencies';

const withCurrencies = (component) => {
    return () => {
        return (
            <CurrenciesContext.Consumer>
                {
                    currencies => (<Component currencies={currencies}/>)
                }
            </CurrenciesContext.Consumer>
        )
    }
};

export default withCurrencies;