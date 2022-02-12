import { Alert, Container } from 'react-bootstrap'

export default function NotFound(props) {
  return (
    <Container>
      <Alert variant='danger' className='text-center position-static shadow-sm mt-5'><b><u>Error 404</u>:</b> {props.text}</Alert>
      <div className='text-center mt-5'>
        <img className="aligncenter m-auto rounded shadow-lg" src='https://http.cat/404' alt='error 404' style={{"height" : "500px", "width" : "auto"}}/>
      </div>
    </Container>
  );
}
