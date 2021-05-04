import { emailService } from '../services/email.service.js'
import { EmailList } from "../cmps/EmailList.jsx";
import { EmailFilter } from "../cmps/EmailFilter.jsx";


export class EmailApp extends React.Component {
    state = {
        filter: null,
        emails: null,
        selectedEmail: null
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        emailService.query(this.state.filter)
            .then((emails) => {
                this.setState({ emails })
            })
    }

    onSetFilter = (filter) => {
        this.setState({ filter }, this.loadEmails)
    }

    setSelectedEmail = (email) => {
        this.setState({ selectedEmail: email })
    }

    goBack = () => {
        this.setState({ selectedEmail: null })
    }

    render() {
        const { emails, selectedEmail } = this.state

        if (!emails) return <div>Loading...</div>
        const filter = this.state.filter;

        return (
            <div className='app'>
                <EmailFilter filter={filter} onSetFilter={this.onSetFilter} />
                <EmailList setSelectedEmail={this.setSelectedEmail} emails={emails} />
            </div>
        )
    }
}