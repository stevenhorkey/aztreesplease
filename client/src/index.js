import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Programs from './views/Programs/Programs';
import Highlights from './views/Highlights/Highlights';
import Donations from './views/Donations/Donations';
import Jobs from './views/Jobs/Jobs';
import Staff from './views/Staff/Staff';
import Groasis from './views/Groasis/Groasis';
import Login from './views/Team/Login';
import Signup from './views/Team/Signup';

class Main extends Component{
    render(){
        return(
            <Fragment>
                <BrowserRouter>
                    <div id="page" className="site">
                        <a className="skip-link screen-reader-text" href="#content"></a>
                        <Header/>
                        <Navbar/>
                        <Switch>
                                <Route exact path='/' component={Home}/>
                            <div className='container bg-white p-5 text-justify'>
                                <Route path='/programs' component={Programs}/>
                                <Route path='/highlights' component={Highlights}/>
                                <Route path='/donations' component={Donations}/>
                                <Route path='/jobs' component={Jobs}/>
                                <Route path='/staff' component={Staff}/>
                                <Route path='/groasis' component={Groasis}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/signup' component={Signup}/>
                                <Route path='/team-content' component={() => window.location = 'https://drive.google.com/drive/folders/1utHQRovogfFscGu18VVT730_-J9FHADi?usp=sharing'}/>
                            </div>
                        </Switch>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default Main;

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
