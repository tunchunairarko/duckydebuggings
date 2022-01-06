
import React, { Fragment, useState, useEffect } from 'react'
import { Container, Button, Form, Jumbotron } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/assets/style.css'





export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const [successNotice, setSuccessNotice] = useState()
    useEffect(() => {
        if (successNotice) {
            alert.success(<div style={{ 'fontSize': '0.70em' }}>{successNotice}</div>)
            setSuccessNotice(undefined)
        }
    }, [successNotice])

    useEffect(() => {
        if (error) {
            alert.error(<div style={{ 'fontSize': '0.70em' }}>{error}</div>)
            setError(undefined)
        }
    }, [error])

    return (
        <main className='front-end-main'>
            <Header></Header>
            <Container className='padding-r-l-75 login-form'>
                <Jumbotron>
                    {error && (
                        <ErrorNotice message={error} clearError={() => setError(undefined)} />
                    )}
                    <h1>
                        User Login
                    </h1>
                    <Form onSubmit={submit}>
                        <Form.Group controlId="formUserName">
                            <Form.Label>User name</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Text className="text-muted">
                            Your access credentials are secured.
                        </Form.Text>
                        <Button variant="primary" type="submit" size="lg" block>
                            Login
                        </Button>
                    </Form>
                </Jumbotron>
            </Container>
            <Footer></Footer>
        </main>
    )
}
