import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import * as Icons from '../helpers/icons'

export default function CusSearchBox() {
    const [search, setSearch] = useState();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/react-vite-weatherapp/home/' + search)
    }

    return (
        <Form method='GET' action='#' className='form-inline col-2 ms-auto' style={{ "marginTop": "0.8rem" }} onSubmit={handleSubmit}>
            <Form.Group controlId='citySearch'>
                <div className='input-group'>
                    <span className="input-group-prepend d-flex" >
                        <span className="input-group-text text-white bg-secondary" style={{ "margin": "0", "padding": "0" }}><Icons.ReactLogo className='App-logo' /></span>
                    <span className='cus-nav-search d-flex'>
                        <Form.Control className='bg-dark text-white' type='text' placeholder='CityID' onChange={(e) => { setSearch(e.target.value) }} />
                        <Button key={9999} variant='success' type='submit'><Icons.Search /></Button>
                    </span>
                    </span>
                </div>
            </Form.Group>
        </Form>
    );
}