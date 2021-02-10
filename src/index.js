import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

// コメント追加
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
