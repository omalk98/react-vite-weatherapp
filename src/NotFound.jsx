import {Alert, Container} from 'react-bootstrap'

export default function NotFound(props) {
  return (
    <Container>
      <br/><br/><br/>
      <Alert variant='danger' className='text-center position-static'><b><u>Error 404</u>:</b> {props.text}</Alert>
    </Container>
  );
}
