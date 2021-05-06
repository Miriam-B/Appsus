export class EmailFilter extends React.Component {

    state = {
      filterBy: {
        text: '',
        onlyUnread: false,
      }
    }
  
    handleChange = (ev) => {
        if (ev.target.name == 'onlyUnread') {
            this.setState({
                filterBy: {
                    onlyUnread: ev.target.checked
                }
            }, () => this.props.onSetFilter(this.state.filterBy))
        }
        else if (ev.target.name == 'text') {
            this.setState({
                filterBy: {
                    text: ev.target.value
                }
            }, () => this.props.onSetFilter(this.state.filterBy))
        }
    }
  
    render() {
      const { text, onlyUnread } = this.state.filterBy
      return (
  
        <form className="email-filter input-group">
          <div className="input-group">
            <div className="input-group-addon">
              <span className="input-group-text email-filter-search-text" id="basic-addon1">
                  Search  
              </span>
            </div>
            <div className="input-group-addon">
            <input className="email-filter-text" type="text" id="text" name="text" value={text} onChange={this.handleChange} className="form-control" aria-label="Search"/>
            </div>
            <div className="input-group-append">
              <div className="input-group">
                <div className="input-group-addon">
                  <div className="input-group-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg>
                    <label className="switch">
                        <input type="checkbox" id="onlyUnread" name="onlyUnread" data-toggle="toggle" checked={onlyUnread} onChange={this.handleChange} />
                        <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </form>
      )
    }
  }