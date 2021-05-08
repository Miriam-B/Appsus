const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { emailService } from '../services/email.service.js'
import { EmailList } from "../cmps/EmailList.jsx";
import { EmailFilter } from "../cmps/EmailFilter.jsx";
import { EmailDetails } from '../pages/EmailDetails.jsx';
import { eventBusService } from '../../../services/event-bus.service.js'
import { EmailCompose } from '../cmps/EmailCompose.jsx';
import { SideBar } from '../cmps/SideBar.jsx';

export class EmailApp extends React.Component {
    state = {
        filter: null,
        emails: null,
        selectedEmailId: null
    }

    componentDidMount() {
        this.loadEmails()

        eventBusService.on('emails-updated', () => {
            this.loadEmails();
        });
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
        this.setState({ selectedEmailId: email ? email.id : null })
    }

    goBack = () => {
        this.setState({ selectedEmail: null })
    }

    renderEmailList = () => {
        const { emails, selectedEmailId } = this.state

        if (!emails) return <div>Loading...</div>
        const filter = this.state.filter;

        return <div className='app'>
                
                <EmailFilter filter={filter} onSetFilter={this.onSetFilter} />
                <EmailList setSelectedEmail={this.state.selectedEmail} emails={emails} />
                </div>
    }

    render() {
        return <div className="email-app container">
                <div className="row">
                    <SideBar emails={this.state.emails}/>
                    <div className="sidenav-page col-sm-9">
                        <Router>
                            <Switch className="email-navbar">
                                <Route component={EmailCompose} path='/email/compose' />
                                <Route component={EmailDetails} path={'/email/:emailId'} />
                                <Route component={this.renderEmailList} path='/email' />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
    }
}