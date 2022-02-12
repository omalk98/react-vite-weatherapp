import {Alert, Container} from 'react-bootstrap'
import * as Icons from './helpers/icons'

export default function NotFound() {
  return (
    <Container style={{'overflow' : 'hidden'}}>
      <br/><br/><br/>
      <Alert variant='danger text-center position-static'><b><u>Error 404</u>:</b> Page Not Found.</Alert>
      <div className='py-5' style={{'transform' : 'translateX(35%)'}}>
      <Icons.ReactLogo className="App-logo"/>
      </div>
    </Container>
  );
}
