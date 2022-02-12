import { Container, Form, Card, Row, Col } from 'react-bootstrap'
import SearchBar from './SearchBar'
import SearchOptions from './SearchOptions';

export default function SearchCard(props) {
    return (
        <section className='vh-20'>
            <Container className='w-100 h-100 mt-5 '>
                <Row className='d-flex justify-content-center align-items-center h-100'>
                    <Col className='col-md-8 col-lg-6 col-xl-5'>
                        <Card className='w-100 h-100 p-2 position-static shadow-lg' style={{ "textShadow": "1px 2px 8px black", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundColor": "var(--bs-gray-600)", "backgroundImage": "url('https://media1.tenor.com/images/69420a9494909231ca2752a175839fec/tenor.gif')" }}>
                            <Card.Body className='position-static'>
                                <Card.Title className="mb-4 pb-2 fw-normal text-white text-shadow">Check the weather forecast</Card.Title>
                                <Form method='GET' action='#' className='form-inline'>
                                    <Form.Group controlId="weatherSearch">
                                        <SearchBar />
                                    </Form.Group>

                                    <Form.Group controlId="weatherSearch">
                                        <SearchOptions />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}