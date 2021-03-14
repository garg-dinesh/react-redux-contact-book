import React from "react"
import './styles/App.scss';
import Navbar from "./components/elements/Navbar"
import Contacts from "./components/contacts/Contacts"
import {Provider} from "react-redux"
import store from "./store"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AddContact from "./components/contacts/AddContact"
import EditContact from "./components/contacts/EditContact"




function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
            </Switch>
          </div>
        </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
