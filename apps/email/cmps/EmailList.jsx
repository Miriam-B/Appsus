import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, setSelectedEmail}) {
  return (
    <div className="email-list">
      { emails.map(email => <EmailPreview email={email} key={book.id} setSelectedBook={setSelectedBook} />)}
    </div>
  )
}