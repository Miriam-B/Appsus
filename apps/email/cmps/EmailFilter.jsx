export class BookFilter extends React.Component {

    state = {
      filterBy: {
        name: '',
        minPrice: 0,
        maxPrice: 500
      }
    }
  
    handleChange = (ev) => {
      const field = ev.target.name
      const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value.toLowerCase();
      this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
        this.props.onSetFilter(this.state.filterBy)
      })
    }
  
    render() {
      const { name, minPrice, maxPrice } = this.state.filterBy
      return (
  
        <form className="book-filter">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
          <label htmlFor="minPrice">Min Price:</label>
          <input type="number" id="minPrice" name="minPrice" value={minPrice} onChange={this.handleChange} />
          <label htmlFor="maxPrice">Max Price:</label>
          <input type="number" id="maxPrice" name="maxPrice" value={maxPrice} onChange={this.handleChange} />
        </form>
      )
    }
  }