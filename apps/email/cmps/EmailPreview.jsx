const { NavLink } = ReactRouterDOM

export function EmailPreview({ email }) {
  return (
    <div className="card">
      <NavLink to={`/email/details/${email.id}`}>
        <article className="email-preview text-justify">
        <div className="input-group-addon">
            <span className="input-group-text" >
              { !email.isRead ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z">
                  </path></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16">
                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z"/>
              </svg>}
            </span>
        </div>
        <div className="input-group">
            <div className="input-group-addon">
              <span className="input-group-text" >From:</span>
            </div>
            <div className="form-control"> {email.senderName + ' <' + email.sender + '>'}</div>
            <div className="input-group-addon">
              <span className="input-group-text" >{getTime(email.sentAt)} </span>
            </div>
          </div>
          <div className="input-group">
            <div className="input-group-addon">
              <span className="input-group-text" >To:</span>
            </div>
            <div className="form-control"> {email.receiverName + ' <' + email.receiver + '>'}</div>
          </div>
          <div className="input-group">
            <div className="input-group-addon">
              <span className="input-group-text" >Subject:  </span>
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
  var timeString = '';

  if (date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()) {
    timeString = formatAMPM(date);
  }
  else {
    timeString = formatShortDate(date);
  }
  return (<div>
            {timeString}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
          </div>);
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

