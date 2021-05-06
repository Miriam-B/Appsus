const { NavLink } = ReactRouterDOM

export function EmailPreview({ email }) {
  return (
    <NavLink to={`/email/${email.id}`}>
      <article className="email-preview">
        <h1>{email.senderName + ' <' + email.sender + '>'}</h1>
        <h2>{email.subject}</h2>
        <h2>{email.body > 30 ? email.body.substring(0, 27) + '...' : email.body}</h2>
        <p>{getTime(email.sentAt)}</p>
      </article>
    </NavLink>
  )
}

export function getTime(timestamp) {
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
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function formatShortDate(date) {
  var month = date.getUTCMonth() + 1;
  var day = date.getUTCDate();

  return day + "/" + month;
}

