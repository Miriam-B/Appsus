const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

  render() {

    return (
      <header className="app-header">
        <h1>Appsus</h1>
        <nav>
          <ul className="clean-list">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Notes</NavLink></li>
            <li><NavLink to="/">Email</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export const AppHeader = withRouter(_AppHeader)