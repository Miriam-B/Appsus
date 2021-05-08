export class EmailStatus extends React.Component {
    getNumOfUnread = () => {
        return this.props.emails ? 
            this.props.emails.
            filter(email => !email.isRead).length : 0;
    }
    
    getNumOfEmails = () => {
        return this.props.emails ? 
            this.props.emails.length : 0;
    }
    
    render() {
        return (<span className="email-status">
        <span className="badge bg-primary rounded-pill">{this.getNumOfUnread()}</span>
        <span className="badge rounded-pill">{this.getNumOfEmails()}</span>
        </span>)
    }
}