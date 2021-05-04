import { emailService } from "../services/email.service.js";
const { Link } = ReactRouterDOM

export function EmailPreview({ email }) {
  return (
    <Link to={`/email/${book.id}`}>
      <article className="email-preview">
      <p>{email.sender}</p>
      <p>{email.subject}</p>
      <p>{getTime(timestamp)}</p>
    </article>
    </Link>
  )
}

function getTime(timestamp) {
    const today = new Date();
    var date = new Date(timestamp);

    if (date.getDate() == today.getDate() && 
        date.getMonth() == today.getMonth() &&
        date.getFullYear() == today.getFullYear()) {
        return formatAMPM(date);
    }
    else {
        return formatShortDate(date);
    }

}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function formatShortDate(date) {
    var month = date.getUTCMonth() + 1; 
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    
    newdate =  day + "/" + month;
}

