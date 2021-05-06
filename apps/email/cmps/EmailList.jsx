import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, selectedEmail, setSelectedEmail}) {
  return (
    <div className="email-list">
      { emails.map(email => 
        <EmailPreview email={email} key={email.id} setSelectedEmail={setSelectedEmail} />)}
    </div>
  )
}
