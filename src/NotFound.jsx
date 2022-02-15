import { useNavigate } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap'


const routeChange = () => {
  let path = `newPath`;
  navigate(path);
}

export default function NotFound(props) {
  function removeError(e) {
    props.handler();
  }
  return (
    <Container>
      <Alert onClick={props.handler && removeError} variant="danger" className="text-center shadow-sm mt-5 position-static"><b><u>Error 404</u>:</b> {props.text}
        <div className='w-100 text-center mt-5'>
          <img className="w-100 m-auto rounded shadow-lg" src='https://http.cat/404' alt='error 404' />
        </div>
      </Alert>

    </Container>
  );
}
