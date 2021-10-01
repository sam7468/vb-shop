import { withRouter } from 'react-router' //to get { match }
import { useDispatch } from 'react-redux'
import cartFn from '../actions/Addcartfn'

function BotDetail(props){
    
    const botObject = props.data[props.match.params.id-1]
    
    const dispatch = useDispatch()
    const addtocartFn = () => {
        dispatch(cartFn())
    }

    return(
        <>
            <div className="main-container">
                <br></br>
                <div className="bots-container">
                    <div className="bot-desc">
                        <h1>{botObject.bot}</h1>
                        <p>{botObject.description}</p>
                        moderate risk<br></br>
                        <div className="btns">
                             <button onClick={addtocartFn}>buy</button>
                        </div>
                    </div>
                    <div className="values">
                        index value : {botObject["index-value"]}
                    </div>
                    <div className="values">
                        cagr : <span className="cagr-value">{botObject.cagr}</span>
                    </div>
                </div>
            </div>
          
   
        </>
    )
}

export default withRouter(BotDetail)