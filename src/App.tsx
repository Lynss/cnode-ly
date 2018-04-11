import * as React from 'react'
import './App.scss'
import { Provider } from 'mobx-react'
import TotalRoute from './routes'

class App extends React.Component {
    render() {
        return (
            <Provider>
                <TotalRoute />
            </Provider>
        )
    }
}

export default App
