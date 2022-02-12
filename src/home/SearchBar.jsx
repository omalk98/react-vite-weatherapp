import { Form, Button } from 'react-bootstrap'
import * as Icons from '../helpers/icons'

export default function SearchBar() {
    return (
        <div className='input-group position-static'>
            <div className="input-group-prepend position-static" >
                <span className="input-group-text text-white bg-secondary" id="basic-addon1">?</span>
            </div>
            <Form.Control className='bg-dark text-white position-static' type='text' placeholder='City, CC' />
            <Button variant='success' className='position-static' type='submit'><Icons.Weather />&nbsp;Forecast</Button>
        </div>
    )
}