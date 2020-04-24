import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          user: '',
          message: '',
          messageList: []
      }
  }

  render () {
    return (
      <div> 
        <TextField
        label="Name"
        variant="outlined"
        color="secondary"
        />

        <TextField
        label="Message"
        variant="outlined"
        color="secondary"
        />

        <Button variant="contained">Send</Button>
      </div>
    )
  }

}
export default App;
