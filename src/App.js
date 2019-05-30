import React from 'react'
import HelpWidget from './widget'
import logo from './logo.svg'
import './App.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCommentAlt,
  faSearch,
  faPaperclip,
  faThumbtack,
  faCog,
  faTimes,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faFolder } from '@fortawesome/free-regular-svg-icons'

library.add(
  faCommentAlt,
  faSearch,
  faEnvelope,
  faPaperclip,
  faFolder,
  faThumbtack,
  faCog,
  faTimes,
  faCheck
)

function App() {
  const [showWidget, setShowWidget] = React.useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn btn-primary" onClick={() => setShowWidget(true)}>
          Open help widget
        </button>
        <HelpWidget show={showWidget} onDismiss={() => setShowWidget(false)} />
      </header>
    </div>
  )
}

export default App
