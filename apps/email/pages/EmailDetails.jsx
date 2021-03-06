import { emailService } from "../services/email.service.js";
import { getTime as renderTime } from "../cmps/EmailPreview.jsx";
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
            this.props.history.push('/email/inbox');
        });
    }


    render() {
        const { email } = this.state

        if (!email) return <div>Loading...</div>
        return (
            <div className="email-details text-justify">
                <div className="email-details-view">
                    <article className="email-preview">
                    <div className="input-group-addon">
                            <span className="input-group-text" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16">
                                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z"/>
                            </svg>
                            </span>
                        </div>
                        <div className="input-group">

                            <div className="input-group-text">
                                From:
                        </div>
                            <div className="form-control">
                                {email.senderName + ' <' + email.sender + '>'}
                            </div>
                            <div className="input-group-text">
                            {renderTime(email.sentAt)}
                            </div>
                        </div>
                        <div className="input-group">

                            <div className="input-group-text">
                                To:
                        </div>
                            <div className="form-control">
                                {email.receiverName + ' <' + email.receiver + '>'}
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-group-text">
                                Subject:
                        </div>
                            <div className="form-control">
                                {email.subject}
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-group-text">
                                Body:
                        </div>
                            <div className="form-control">
                                {email.body}
                            </div>
                        </div> 
                        <div className="input-group">
                            <NavLink className="btn btn-primary" to={`/email/inbox`}>Back</NavLink>
                            <button className="btn btn-danger" onClick={this.onRemoveEmail}>Delete</button>
                        </div>
                    </article>
                </div>
                </div>
        )
    }
}
