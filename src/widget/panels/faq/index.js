import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

function CardColumn({ icon, text }) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card">
        <div className="card-body">
          <span className="icon">
            <FontAwesomeIcon icon={icon} />
          </span>
          {text}
        </div>
      </div>
    </div>
  )
}

function PreferEmail({ showMailUs }) {
  return (
    <div className="prefer-email">
      <h2>Prefer email instead?</h2>
      <div className="text-center m-3">
        <button className="btn btn-light" onClick={showMailUs}>
          <span className="icon">
            <FontAwesomeIcon icon={['far', 'envelope']} />
          </span>
          Write to us
        </button>
      </div>
      <small>We are super quick in responding to your queries</small>
    </div>
  )
}

export default function Faq({ showMailUs }) {
  return (
    <div className="panel faq-panel">
      <PreferEmail showMailUs={showMailUs} />
      <div className="container faq-section">
        <div className="mb-3">
          <label className="sr-only" htmlFor="searchBar">
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
          <CardColumn icon={['far', 'folder']} text="Sharing Openings" />
          <CardColumn icon="thumbtack" text="Managing Openings" />
          <CardColumn icon="cog" text="Managing Candidates" />
          <CardColumn icon="cog" text="Account Management" />
          <CardColumn icon={['far', 'folder']} text="Sourcing Candidates" />
          <CardColumn icon={['far', 'folder']} text="Reporting" />
        </div>
      </div>
    </div>
  )
}
