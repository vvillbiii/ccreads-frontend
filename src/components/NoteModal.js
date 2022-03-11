import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

const NoteModal = (props) => {
  const id = props.article._id;
  const URL = "https://capstone-mern-backend.herokuapp.com/";

  const [newNote, setNewNote] = useState({
    body: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewNote({ ...newNote, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${URL}notes/${id}`, {
      method: "post",
      headers: {
        "auth-token": localStorage.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    const data = await response.json();
    setNewNote({
      body: "",
    });
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Write Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Note</Form.Label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              rows="3"
              value={newNote.body}
              onChange={handleChange}
            ></textarea>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="secondary" type="submit">
              Add Note to Library
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoteModal;
