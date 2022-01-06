import React from "react";
import { Form, Button} from "react-bootstrap";

export const FormLogIn = () => (
        <Form className="p-3">
          <div className="row justify-content-end">
            <Form.Group className="col-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="col-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </div>
          <div className="row justify-content-end pe-2">
          <Button className="col-1" variant="primary" type="submit">
            Login
          </Button>
          </div>
        </Form>
  )

  // import { Form, Button, Row, Col} from "react-bootstrap";

// export const FormLogIn = () => (
//         <Form className="p-3">
//           //<div className="row justify-content-end">
//           <Row className="justify-content-end">
//            <Col sm="12">
//            	 <Form.Group className="col-2" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//               <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>
//             <Form.Group className="col-2" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//            </Col>
//           </Row>
//           <div className="row justify-content-end pe-2">
//           <Button className="col-1" variant="primary" type="submit">
//             Login
//           </Button>
//           </div>
//         </Form>
//   )
