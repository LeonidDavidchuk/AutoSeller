import React, { useContext } from 'react'
import Modal from "react-bootstrap/Modal"
import { Button, Form } from "react-bootstrap"
import { Context } from '../..'

const CreateCar = (show, onHide) => {
    const { car } = useContext(Context)
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить авто
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите марку авто"
                    />

                    <Form.Control
                        className="mt-3"
                        placeholder="Введите модель авто"
                    />

                    <Form.Control
                        className="mt-3"
                        placeholder="Введите цену авто"
                        type="number"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateCar;