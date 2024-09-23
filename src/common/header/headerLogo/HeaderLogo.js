import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo/play.png'
function HeaderLogo({showAsideBar}) {

    return (
        <>
            <div className="nav-header">
                <Link to="/" className="brand-logo justify-content-center" style={{padding:"6px"}}>
                    <img src={logo} alt="" style={{ width: '100%' }} />
                </Link>
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