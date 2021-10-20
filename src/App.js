import './style.css'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import BotsList from './components/BotsList';
import Header from './components/Header';
import BotDetail from './components/BotDetail';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getDataFn from './actions/GetdataFn';

function App() {
  
  const cartCount = useSelector(state=>state.cartreducer)
  const botData = useSelector(state=>state.botdatareducer)
  
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(getDataFn())}) //get data from store


  return (
    <div>
      <Router>
        <Switch>
                <Route exact path="/bots">
                  <Header cartCount={cartCount}/>
                  <BotsList data={botData} />
                </Route>

                <Route exact path="/bots-details/:id">  
                  <Header cartCount={cartCount}/>
                  {<BotDetail data={botData}/>}
                </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
