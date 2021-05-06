import { EmailService } from '../services/email.service.js'
import { emailService } from "../services/email.service.js";

export function EmailCompose() {
  return (
    <section>
        <form action="">
            <label for="to">To</label>
            <input type="text" readOnly={true} value={"Myself"} name="to"></input>
            <label for="subject">Subject</label>
            <input type="text" name="subject"></input>
            <label for="body">Body</label>
            <input type="textarea" name="body"></input>
        </form>
        <input type="submit"></input>
    </section>
  )
}


