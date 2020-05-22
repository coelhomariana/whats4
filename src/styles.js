import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 20px; 
`

export const MessageListContainer = styled.div`
display: flex;
border: 1px solid black;
border-radius: 5px;
width: 55%;
height: 400px;
margin: 10px;
`

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 55%;
  margin: 15px;
  justify-content: space-between;
`

export const StyledButton = styled(Button)`
  && {
    width: 200px;
    background-color: #d40000;
    color: white;
  }
`