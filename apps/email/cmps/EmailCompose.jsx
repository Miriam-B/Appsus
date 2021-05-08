import { emailService } from "../services/email.service.js";
import { eventBusService } from '../../../services/event-bus.service.js'
const { NavLink } = ReactRouterDOM
export class EmailCompose extends React.Component {

    state = {
        email: {
            to: '',
            sender: 'Myself',
            subject: '',
            body: ''
        }
    }

    onChanged = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState(({ email }) => ({
            email: { ...email, [field]: value }
        }))
    }
    
    sendEmail = () => {
        emailService.addEmail(this.state.email);
        this.props.history.push('/email/');
        eventBusService.emit('emails-updated');
    }

    render() {
        return (
            <section className="card">
                <form onSubmit={this.sendEmail}>
                <div className="input-group">
                    <div className="input-group-text">
                        <label htmlFor="to">To</label>
                    </div>
                    <input className="form-control" type="text" readOnly={true} value={"Myself"} name="to" onChange={this.onChanged}></input>
                </div>
                <div className="input-group">
                    <div className="input-group-text">
                    <label htmlFor="subject">Subject</label>
                    </div>
                    <input className="form-control" type="text" name="subject" onChange={this.onChanged}></input>
                </div>
                <div className="input-group">
                    <div className="input-group-text">
                    <label htmlFor="body">Body</label>
                    </div>
                    <textarea className="form-control" name="body" rows="10" onChange={this.onChanged}></textarea>
                </div>
                <div className="input-group">
                    <input className="btn btn-primary" type="submit"/>
                    <NavLink className="btn btn-dark" to="/email">Close</NavLink>
                </div>`
                </form>
            </section>
        )
    }
}


