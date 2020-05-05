import React, {useEffect} from "react";
import './app.css';
import Header from "../header";
import {connect} from 'react-redux';
import {Switch, Route, useHistory} from 'react-router-dom';
import ModalMessage from "../modal-message/modal-message";
import Home from "../../pages/home/home";
import Enter from "../../pages/enter/enter";
import Profile from "../../pages/profile/profile";
import {startAppInitialization} from "../../actions/user.action";
import People from '../../pages/people/people'

const App = (props) => {
    let history = useHistory();
    useEffect(() => {
        props.init(history);
    }, [])

    return (
        <section style={{backgroundImage: `url(${props.bg})`}} className="app-wrapper">
            <ModalMessage />
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <Home/>} />
                <Route path='/auth/:where?' render={() => <Enter/>}/>
                <Route path='/profile/:id' render={() => <Profile/>} />
                <Route exact path='/people' render={() => <People/>} />
            </Switch>
        </section>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        init:(history) => dispatch(startAppInitialization(history))
    }
};

export default connect(null, mapDispatchToProps)(App);