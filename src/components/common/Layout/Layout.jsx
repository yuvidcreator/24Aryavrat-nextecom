import Footer from './Footer'
import Header from './Header'
import MobileBottomNav from './MobileBottomNav'

const Layout = ({children}) => {
    return (
        <>
            <Header />
                <div>
                    {children}
                </div>
            <Footer />
            <MobileBottomNav />
        </>
    )
}

export default Layout