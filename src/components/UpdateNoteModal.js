import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateNoteModal = (props) => {
  const id = props.note._id;
  const navigate = useNavigate();
  const URL = "https://capstone-mern-backend.herokuapp.com/";

  const [editNote, setEditNote] = useState({
    body: "",
  });

  const handleChange = (event) => {
    setEditNote({ ...editNote, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${URL}notes/${id}`, {
      method: "put",
      headers: {
        "auth-token": localStorage.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editNote),
    });
    const data = await response.json();
    console.log(data);
    setEditNote({
      body: "",
    });
    navigate("/dashboard/notes");
    props.onHide();
  };

  const handleDelete = async () => {
    await fetch(`${URL}notes/${id}`, {
      method: "delete",
      headers: {
        "content-Type": "application/json",
        "auth-token": localStorage.token,
      },
    });
    navigate("/dashboard/notes");
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
        <Modal.Title id="contained-modal-title-vcenter">Edit Note</Modal.Title>
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
              value={editNote.body}
              onChange={handleChange}
              placeholder={props.note.body}
            ></textarea>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="secondary" type="submit">
              Save
            </Button>
          </div>
        </Form>
        <Button
          className="mt-2"
          size="sm"
          variant="danger"
          onClick={handleDelete}
        >
          Delete Note
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateNoteModal;
