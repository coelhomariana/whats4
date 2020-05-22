import React from 'react';
import TextField from '@material-ui/core/TextField';
import { MessageListContainer } from "./styles"
import { TextFieldContainer } from "./styles";
import { MainContainer } from "./styles"
import { StyledButton } from "./styles";
import MessageCard from './components/MessageCard';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      message: '',
      messageList: []
    }
  }

  handleUser = event => {
    this.setState({
      user: event.target.value
    })
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  }

  addNewMessage = () => {
    const newMessage = { userName: this.state.user, message: this.state.message }
    const messageListCopy = [...this.state.messageList, newMessage]

    this.setState({
      messageList: messageListCopy,
      message: ""
    })
  }

  render() {
    return (
      <MainContainer>
        <MessageListContainer>
          {this.state.messageList.map(element => {
            return (
              <MessageCard>{element.userName} {element.message}</MessageCard>
            )
          })}
        </MessageListContainer>

        <TextFieldContainer>
          <TextField
            value={this.state.user}
            onChange={this.handleUser}
            label="Name"
            variant="outlined"
            color="secondary"
          />

          <TextField
            value={this.state.message}
            onChange={this.handleMessage}
            label="Message"
            variant="outlined"
            color="secondary"
            size="medium"
          />

          <StyledButton
            variant="contained"
            onClick={this.addNewMessage}
          >
            Send
          </StyledButton>
        </TextFieldContainer>
      </MainContainer>
    )
  }
}
export default App;
