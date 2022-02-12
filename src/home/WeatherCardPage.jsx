import { Container, Row, Col } from 'react-bootstrap'

export default function WeatherCardPage(props) {
    return (
        <section>
            <Container className='w-100 h-100 mt-5 '>
                <Row className='d-flex justify-content-center align-items-center h-100'>
                    <Col className='col-md-8 col-lg-6 col-xl-5'>
                        {props.error && props.error}
                        {props.cities}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}