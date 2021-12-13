import React from 'react';

const Cart = ({ cart }) => {
    // const { id } = cart;
    let totalCount = 0;
    for (let i = 0; i < cart.length; i++) {
        const countries = cart[i];
        totalCount = totalCount + countries.id
    }
    return (
        <div>
            <h1>This is cart:{cart.length}</h1>
            <p>Total: </p>
        </div>
    );
};

export default Cart;