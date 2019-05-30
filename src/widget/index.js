import React from 'react'
import { Dialog } from '@reach/dialog'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import VisuallyHidden from '@reach/visually-hidden'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

function HelpWidget({ show, onDismiss }) {
  const [showTabAt, setShowTabAt] = React.useState(1)
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
            <div className="panel live-chat-panel">
              <div className="chat-head">
                <p>
                  Welcome user. You will be assigned a customer support user
                  shortly.
                </p>
                <span className="time-stamp">
                  {new Date().getHours() + ':' + new Date().getMinutes()}
                </span>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel faq-panel">
              <div className="prefer-email">
                <h2>Prefer email instead?</h2>
                <div className="text-center m-3">
                  <button
                    className="btn btn-light"
                    onClick={() => setShowTabAt(2)}
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={['far', 'envelope']} />
                    </span>
                    Write to us
                  </button>
                </div>
                <small>We are super quick in responding to your queries</small>
              </div>
              <div className="container faq-section">
                <div className="mb-3">
                  <label className="sr-only" for="searchBar">
                    Search
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <FontAwesomeIcon icon="search" />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="searchBar"
                      placeholder="What can you help you with? Start typing your question..."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <span className="icon">
                          <FontAwesomeIcon icon={['far', 'folder']} />
                        </span>
                        Sharing Openings
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <span className="icon">
                          <FontAwesomeIcon icon="thumbtack" />
                        </span>
                        Managing Openings
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <span className="icon">
                          <FontAwesomeIcon icon="cog" />
                        </span>
                        Managing Candidates
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <span className="icon">
                          <FontAwesomeIcon icon="cog" />
                        </span>
                        Account Management
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <span className="icon">
                          <FontAwesomeIcon icon={['far', 'folder']} />
                        </span>
                        Sourcing Candidates
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <span className="icon">
                          <FontAwesomeIcon icon={['far', 'folder']} />
                        </span>
                        Reporting
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel mailus">
              <form>
                <div class="alert alert-success" role="alert">
                  <span className="icon">
                    <FontAwesomeIcon icon="check" />
                  </span>
                  Message sent! Thanks for reaching out! Someone will get back
                  to you soon.
                </div>
                <div className="form-group">
                  <label className="sr-only" for="inlineFormInput">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    disabled
                    value="To: support@recruiterbox.com"
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" for="inlineFormInput">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" for="inlineFormInput">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    cols="50"
                    placeholder="Message..."
                  />
                </div>
                <div className="position-relative">
                  <div className="custom-file-tag">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="validatedCustomFile"
                    />
                    <label
                      className="custom-file-icon"
                      for="validatedCustomFile"
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon="paperclip" />
                      </span>
                      Attach files
                    </label>
                  </div>
                  <button id="button-mailus" className="btn btn-primary">
                    Send Mail
                  </button>
                </div>
              </form>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Dialog>
  )
}

export default HelpWidget
