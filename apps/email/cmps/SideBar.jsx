import { EmailStatus } from './EmailStatus.jsx';

const { NavLink } = ReactRouterDOM;

export class SideBar extends React.Component {
  render() {
    return (
      <div className="sidenav col-sm-2">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 medium">
              <li className="btn btn-success">
                  <NavLink to={`/email/compose`}>Compose</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to={`/email/`}>Inbox <EmailStatus emails={this.props.emails}/></NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to={`/email/`}>Sent</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to={`/email/`}>Drafts</NavLink>
              </li>
          </ul>
      </div>
    )
  }
}