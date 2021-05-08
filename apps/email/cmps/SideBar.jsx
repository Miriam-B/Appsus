import { EmailStatus } from './EmailStatus.jsx';

const { NavLink } = ReactRouterDOM;

export class SideBar extends React.Component {
  render() {
    return (
      <div className="sidenav col-sm-4 list-group">
          <ul className="sidebar btn-toggle-nav list-unstyled fw-normal pb-1 medium">
              <li className="nav-item">
                  <div className="btn btn-success">
                    <NavLink to={`/email/compose`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    Compose
                    </NavLink>
                </div>
              </li>
              <li className="nav-item">
                  <NavLink to={`/email/inbox`}>Inbox <EmailStatus emails={this.props.emails}/></NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to={`/email/sent`}>Sent</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to={`/email/drafts`}>Drafts</NavLink>
              </li>
          </ul>
      </div>
    )
  }
}