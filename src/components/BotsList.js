import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import cartFn from '../actions/Addcartfn'

function BotsList(props){

    const dispatch = useDispatch()
    const addtocartFn = () => {
        dispatch(cartFn())
    }

    return(
        <>
            <div className="main-container">

                {props.data.map(e=>
                        (<div className="bots-container"> 
                        
                            <div className="bot-div">
                                <h4>{e.bot}</h4> 
                                <div className="index-value-box">
                                    <p>INDEX-VALUE</p>
                                    <p>{e["index-value"]}</p>
                                </div>
                                <div className="cagr-box">
                                    <p>CAGR</p>
                                    <p className="cagr-value">{e.cagr}</p> 
                                </div>
                            </div>

                            <div className="btns">
                                <Link to={`/bots-details/${e.id}`}>
                                    <button>view-algo</button>
                                </Link>
                                <button onClick={addtocartFn}>buy</button>
                            </div>
                        </div>)
                        ) }
            </div>
          
   
        </>
    )
}

export default BotsList