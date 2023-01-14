import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MobileBottomNav from './MobileBottomNav'

const Layout = ({
    children,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    subTotal
}) => {
    return (
        <>
            <Header 
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                subTotal={subTotal}
            />
                <div>
                    {children}
                </div>
            <Footer />
            <MobileBottomNav />
        </>
    )
}

export default Layout