export const sayHelloAction = (params) => ({type: 'SAY_HELLO', payload: params});

export const selectTokenAction = (params, contract) => ({type: 'SELECT_TOKEN', payload: params, contract});

