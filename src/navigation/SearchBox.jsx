import { Form, Button } from 'react-bootstrap'
import * as Icons from '../helpers/icons'

export default function CusSearchBox() {
    return (
        <Form method='GET' action='#' className='form-inline mt-3 col-2 ms-auto'>
                <Form.Group controlId='citySearch'>
                    <div className='input-group'>
                        <div className="input-group-prepend" >
                            <span className="input-group-text text-white bg-secondary">#</span>
                        </div>
                        <Form.Control className='bg-dark text-white' type='text' placeholder='CityID' />
                        <Button variant='success' type='submit'><Icons.Search /></Button>
                    </div>
                </Form.Group>
        </Form>
    );
}