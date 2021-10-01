
const Header = (props) =>{
    return(
            <div className="header">
                <div>
                    <span>Dashboard</span>  <span>Cart - {props.cartCount}</span>
                </div>
            </div>
        )
}

export default Header