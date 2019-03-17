import React, { Component } from 'react';
import MainLayout from './components/Layout/MainLayout';
import './App.css';
import { BookListPage, BookPage, LoginPage } from './pages';
import { Switch as Router, Route, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { AllModelReducer } from './reducers';


type MapToProps={
  loggingIn: boolean
}



type Props = {

} & MapToProps & RouteComponentProps;

class App extends Component<Props, {}> {
  render() {
    return (
        <Router>
          <MainLayout>
            <Route exact path="/" component={BookListPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/book-manage"
              render={(props) => {
                if (this.props.loggingIn)
                  return <BookPage />
                else return <Redirect to="/login" />
              }} />
          </MainLayout>
        </Router>
    );
  }
}

const mapStateToProps = (state: AllModelReducer): MapToProps => ({
  loggingIn: state.main.loggingIn
});

export default withRouter(connect(mapStateToProps, null)(App));
