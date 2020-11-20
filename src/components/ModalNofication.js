import React from 'react';

import 'react-slideshow-image/dist/styles.css'
import './Adventure.css'
import {Button, Modal} from 'react-bootstrap'



function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>WaterFall</h4>
          <p>
          Estonia has several waterfalls but the most known are  Jägala juga, Keila juga and Valaste juga. Of the 32 waterfalls and cascades of the Baltic Klint, 29 are located on the North Estonian Klint. In spring after snow dissolving and in autumn after heavy rains the flow of water is the greatest and the waterfalls are bigger than ever. In summer the waterfalls are much smaller, anyway you can swim in the river and stand under the waterfall. 
          In winter, waterfalls freeze, forming unpredictable shapes, icicles and ice caves.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          WaterFall Images
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  export default App;