import * as React from 'react'
import './App.scss'
import { Provider } from 'mobx-react'
import TotalRoute from './routes'
import stores from './stores'

class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <TotalRoute />
            </Provider>
        )
    }
}

export default App
