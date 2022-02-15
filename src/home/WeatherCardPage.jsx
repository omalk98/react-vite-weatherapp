import { Container, Row, Col, Alert } from 'react-bootstrap'
import moment from 'moment'

export default function WeatherCardPage(props) {
    return (
        <section>
            <Container className='w-100 h-100 mt-5 '>
                <Row className='d-flex justify-content-center align-items-center h-100'>
                    <Col className='col-md-8 col-lg-6 col-xl-5'>
                        {props.error && props.error}
                        {<Alert variant='success' ><b>Last Updated:</b> {moment().format("MMMM Do YYYY, h:mm:ss a")}</Alert>}
                        {props.cities}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}