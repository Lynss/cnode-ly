import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from '../containers/index'

class TotalRoute extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Route component={Index}/>
            </BrowserRouter>
        )
    }
}

export default TotalRoute