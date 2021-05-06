const { NavLink } = ReactRouterDOM

export function EmailPreview({ email }) {
  return (
    <div className="card">
      <NavLink to={`/email/${email.id}`}>
        <article className="email-preview text-justify">
        <div className="input-group">
            <div className="input-group-addon">
              <span class="input-group-text" >From:</span>
            </div>
            <div className="form-control"> {email.senderName + ' <' + email.sender + '>'}</div>
            <div className="input-group-addon">
              <span class="input-group-text" >{getTime(email.sentAt)} </span>
            </div>
          </div>
          <div className="input-group">
            <div className="input-group-addon">
              <span class="input-group-text" >Subject:  </span>
            </div>
            <div className="form-control"> {email.subject}</div>
          </div>
          <div className="input-group">
          <div className="form-control"> {email.body > 30 ? email.body.substring(0, 27) + '...' : email.body}</div>
          </div>
        </article>
      </NavLink>
    </div>
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
  var ampm = hours >= 12 ? 'PM' : 'AM';
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

