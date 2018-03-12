class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    this.load('./data/data.json', data=>{
      console.log('componentDidMount > load', data)
    })
  }
  load(url, cb) {
    if (typeof(url)==='string'&&url.length>0) {
      fetch(url).catch(error => {
        console.error('load > load > error:', error)
        if (typeof(cb)==='function') {
          cb(data)
        }
      }).then(response=>{
        return response.json();
      }).then(data=>{
        if (typeof(cb)==='function') {
          cb(data)
        }
      })
    } else {
      if (typeof(cb)==='function') {
        cb(data)
      }
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Test</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
