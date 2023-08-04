'use client';

import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent, deleteStudent, getStudents } from './userApi';
import { selectStudent } from './studentSlice';

function Student() {
  const dispatch = useDispatch();
  const { students } = useSelector(selectStudent);

  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  };

  const [input, setInput] = useState({
    name: '',
    age: '',
    email: '',
    class: '',
  });

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name || !input.age || !input.email || !input.class) {
      alert('All Fields are required');
      return;
    }
    dispatch(createStudent(input));
    setShow(!show);
    setInput({
      name: '',
      age: '',
      email: '',
      class: '',
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };
  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Row>
          <Col md='8'>
            <h1>Student</h1>
            <Button onClick={handleModal}>Add Student</Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Class</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.class}</td>
                    <td>
                      <Button
                        variant='danger'
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Modal show={show} onHide={handleModal}>
              <Modal.Header closeButton>
                <Modal.Title>Add Student</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={handleSubmit}>
                  <div className='form-group my-3'>
                    <label>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      name='name'
                      value={input.name}
                      onChange={handleInput}
                    />
                  </div>
                  <div className='form-group my-3'>
                    <label>Age</label>
                    <input
                      type='number'
                      className='form-control'
                      name='age'
                      value={input.age}
                      onChange={handleInput}
                    />
                  </div>
                  <div className='form-group my-3'>
                    <label>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      value={input.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className='form-group my-3'>
                    <label>Class</label>
                    <input
                      type='number'
                      className='form-control'
                      name='class'
                      value={input.class}
                      onChange={handleInput}
                    />
                  </div>
                  <Modal.Footer>
                    <Button variant='secondary' onClick={handleModal}>
                      Close
                    </Button>
                    <Button type='submit'>Save</Button>
                  </Modal.Footer>
                </form>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Student;
