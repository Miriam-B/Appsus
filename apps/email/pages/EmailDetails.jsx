import { emailService } from "../services/email.service.js";
import { getTime } from "../cmps/EmailPreview.jsx";
const { NavLink } = ReactRouterDOM

export class EmailDetails extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        const id = this.props.match.params.emailId
        emailService.getEmailById(id).then(email => {
            if (!email) return this.props.history.push('/')
            this.setState({ email: email }, () => {
                emailService.setRead(email);
            })
        })
    }

    onRemoveEmail = () => {
        const { email } = this.state

        emailService.deleteEmail(email.id).then(() => {
            this.props.history.push('/email/');
        });
    }


    render() {
        const { email } = this.state

        if (!email) return <div>Loading...</div>
        return (
            <div className="email-details">
                <div className="email-details-view">
                    <article className="email-preview">
                    <h1>{email.senderName + ' <' + email.sender + '>'}</h1>
                    <h2>{email.subject}</h2>
                    <h2>{email.body}</h2>
                    <p>{getTime(email.sentAt)}</p>
                    <NavLink to={`/email`}>Back</NavLink>
                    <button onClick={this.onRemoveEmail}>Delete</button>
                    </article>
                </div>
            </div>
        )
    }
}
