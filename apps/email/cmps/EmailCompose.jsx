import { EmailService } from '../services/email.service.js'
import { emailService } from "../services/email.service.js";
import { eventBusService } from '../../../services/event-bus.service.js'
export class EmailCompose extends React.Component {

    state = {
        email: {
            sender: 'Myself',
            subject: '',
            body: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState(({ email }) => ({
            email: { ...email, [field]: value }
        }));
        // }), () => {
        //   this.props.onSetFilter(this.state.filterBy)
        // })
      }
    
    sendEmail = () => {
        emailService.addEmail(this.state.email);
        this.props.history.push('/email/');
        eventBusService.emit('emails-updated');
    }

    render() {
        return (
            <section>
                <form onSubmit={this.sendEmail}>
                    <label htmlFor="to">To</label>
                    <input type="text" readOnly={true} value={"Myself"} name="to"></input>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject"></input>
                    <label htmlFor="body">Body</label>
                    <input type="textarea" name="body"></input>
                    <input type="submit"></input>
                </form>
            </section>
        )
    }
}


