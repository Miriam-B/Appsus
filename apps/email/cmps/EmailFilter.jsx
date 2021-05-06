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
  
        <form className="email-filter">
          <label htmlFor="text">Search:</label>
          <input type="text" id="text" name="text" value={text} onChange={this.handleChange} />
          <label htmlFor="text">Only Unread:</label>
          <input type="checkbox" id="onlyUnread" name="onlyUnread" checked={onlyUnread} onChange={this.handleChange} />
        </form>
      )
    }
  }