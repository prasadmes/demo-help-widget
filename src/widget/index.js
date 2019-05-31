import React from 'react'
import { Dialog } from '@reach/dialog'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import VisuallyHidden from '@reach/visually-hidden'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LiveChat from './panels/LiveChat'
import Faq from './panels/faq'
import MailUs from './panels/mailus'
import './index.scss'

function HelpWidget({ show, onDismiss }) {
  const [showTabAt, setShowTabAt] = React.useState(1)
  const searchRef = React.useRef()
  const subjectRef = React.useRef()
  React.useEffect(() => {
    onTabChange(showTabAt)
  }, [showTabAt])
  function onTabChange(index) {
    if (index === 1) {
      searchRef.current && searchRef.current.focus()
    } else if (index === 2) {
      subjectRef.current && subjectRef.current.focus()
    }
  }
  return (
    <Dialog isOpen={show} onDismiss={onDismiss}>
      <Tabs
        index={showTabAt}
        onChange={index => setShowTabAt(index)}
        id="help-widget"
      >
        <TabList>
          <Tab>
            <span className="icon">
              <FontAwesomeIcon icon="comment-alt" />
            </span>
            Live Chat
          </Tab>
          <Tab>
            <span className="icon">
              <FontAwesomeIcon icon="search" />
            </span>
            FAQ
          </Tab>
          <Tab>
            <span className="icon">
              <FontAwesomeIcon icon={['far', 'envelope']} />
            </span>
            Mail Us
          </Tab>
          <Tab className="close-button" onClick={onDismiss}>
            <VisuallyHidden>Close</VisuallyHidden>
            <FontAwesomeIcon icon="times" />
          </Tab>
        </TabList>

        <TabPanels className="rounded-sm">
          <TabPanel>
            <LiveChat />
          </TabPanel>
          <TabPanel>
            <Faq searchRef={searchRef} showMailUs={() => setShowTabAt(2)} />
          </TabPanel>
          <TabPanel>
            <MailUs subjectRef={subjectRef} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Dialog>
  )
}

export default HelpWidget
