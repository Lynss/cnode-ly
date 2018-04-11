import * as React from 'react'
import Header from '../components/header'
import { BrowserRouter, Route } from 'react-router-dom'

class TotalRoute extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Route component={Header}/>
            </BrowserRouter>
        )
    }
}

export default TotalRoute