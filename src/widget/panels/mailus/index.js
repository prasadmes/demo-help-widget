import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { persistToStorage } from './operations'
import './index.scss'

export default function MailUs({ subjectRef }) {
  const [hasSentMail, setHasSentMail] = React.useState(false)
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')

  function onFormSubmit(event) {
    event.preventDefault()
    persistToStorage({ subject, message })
    setHasSentMail(true)
  }
  return (
    <div className="panel mailus">
      <form onSubmit={onFormSubmit}>
        {hasSentMail && (
          <div className="alert alert-success" role="alert">
            <span className="icon">
              <FontAwesomeIcon icon="check" />
            </span>
            Message sent! Thanks for reaching out! Someone will get back to you
            soon.
          </div>
        )}
        <div className="form-group">
          <label className="sr-only" htmlFor="inlineFormInput">
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
          <label className="sr-only" htmlFor="inlineFormInput">
            Subject
          </label>
          <input
            type="text"
            ref={subjectRef}
            className="form-control"
            placeholder="Subject"
            onChange={e => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="inlineFormInput">
            Message
          </label>
          <textarea
            className="form-control"
            cols="50"
            rows="4"
            onChange={e => setMessage(e.target.value)}
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
            <label className="custom-file-icon" htmlFor="validatedCustomFile">
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
  )
}
