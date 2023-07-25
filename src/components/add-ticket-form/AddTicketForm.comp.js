import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";



import "./add-ticket-form.style.css";

export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDataErro, frmDt}) => {

    console.log(frmDt);
    return (
        <div  className="mt-1 add-new-ticket">
        <div class="mb-4 p-5 bg-light rounded shadow">
            <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            Subject
                        </Form.Label>
                         <Col sm={9}>
                        <Form.Control 
                        name="Subject"
                        value={frmDt.Subject}
                        //minLength="3"
                        maxlength="100"
                        onChange={handleOnChange}
                        placeholder="Subject"
                        required
                        />
                        <Form.Text className="text-danger">
                        {frmDataErro.subject && "Subject is required!"}
                        </Form.Text>
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            Issue Found 
                            </Form.Label>
                        <Col sm={9}>
                        <Form.Control 
                        type="date"
                        name="issueDate"
                        value={frmDt.issueDate}
                        onChange={handleOnChange}
                        required
                        />
                        </Col>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Details</Form.Label>
                        <Form.Control 
                        as="textarea"
                        name="detail"
                        rows="5"
                        value={frmDt.detail}
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>
                    
                     <br/>
                     <div class="text-center d-grid gap-2"> <button type="button" class="btn btn-info btn-lg">Login</button> </div>
                </Form>
        </div> 
        </div>
    )
}

AddTicketForm.protoTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataErro: PropTypes.object.isRequired,
    
};