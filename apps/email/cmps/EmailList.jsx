import { EmailPreview } from './EmailPreview.jsx'

export class EmailList extends React.Component {

  render() {
    return (
      <div className="email-list">
        { this.props.emails.map(email => 
          <EmailPreview email={email} key={email.id} setSelectedEmail={this.props.setSelectedEmail} />)}
      </div>
    )
  }
}
