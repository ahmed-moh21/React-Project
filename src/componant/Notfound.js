import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

  window.onload = function() {
      let myButton = document.getElementById("Showmodel"); 
      myButton.click();
  }

  return (
    <Modal id="model-error"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button id="Showmodel" >Show Modal</Button>}
    >
      <Modal.Header>Page nOt found</Modal.Header> 
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          
          <p style={{fontSize:"18px"}}>
          <span id='oops'>“Oops!” </span> We not found the following gravatar page associated with your e-mail
            address.
          </p>
          
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
          <Link to="/" >
            <Button
            content="Back to home"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
            />
          </Link>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal;