import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Createlead from './Createlead'
import Updatelead from './Updatelead'
import Deletelead from './Deletelead'
import Viewleads from './Viewleads'

class Routing extends Component{
    
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Createlead} />
                    <Route path="/Viewleads" component={Viewleads} />
                    <Route path="/Updatelead" component={Updatelead} />
                    <Route path="/Deletelead" component={Deletelead} />
                </div>
            </Router>
        )
    }
}


export default Routing;