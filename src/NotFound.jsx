import { useNavigate } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap'


  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }

export default function NotFound(props) {
  function removeError(e){
    props.handler();
  }
  return (
    <Container className='alert alert-dismissible'>
      <Alert dismissible onClick={removeError} variant="danger" className='alert alert-danger alert-dismissible fade show text-center shadow-sm mt-5'><b><u>Error 404</u>:</b> {props.text}
      <div className='w-100 text-center mt-5'>
        <img className="w-100 m-auto rounded shadow-lg" src='https://http.cat/404' alt='error 404' />
      </div>
      </Alert>
      
    </Container>
  );
}
