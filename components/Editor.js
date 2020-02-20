import 'react-quill/dist/quill.snow.css'; // ES6
import ReactQuill from 'react-quill'; // ES6

export default class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Take notes here...' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(value) {
    this.setState({ text: value })
    console.log(this.state.text)
  }
 
  render() {
    return (
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange} />
    )
  }
}