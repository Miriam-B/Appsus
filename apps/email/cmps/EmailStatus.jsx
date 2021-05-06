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
        return <span className="badge">{this.getNumOfUnread()}/{this.getNumOfEmails()}</span>
    }
}