import logo from '../../../assets/images/logo/logo.png'
function HeaderLogo({showAsideBar}) {

    return (
        <>
            <div className="nav-header">
                <a href="/admin" className="brand-logo justify-content-center">
                    {/* <img src={'https://www.abarissoftech.com/assets/img/logo-2.png'} alt="" style={{ width: '100%' }} /> */}
                    <img src={logo} alt="" style={{ width: '50%' }} />
                </a>
                <div className="nav-control" onClick={showAsideBar}>
                    <div className="hamburger">
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderLogo