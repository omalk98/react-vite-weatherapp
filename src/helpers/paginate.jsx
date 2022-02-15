import _ from "lodash"
import { Button, Table } from "react-bootstrap";
import CityCard from '../home/CityCard'

export default function paginateCards(data, currentPage, tempFormat, pageHandler, idHandler) {
    if (data === 'undefined' || data === null) return;
    const numRows = 3;
    const numPages = Math.ceil(data.length / numRows);

    return (
        <div>
            <Table hover>
                <tbody>
                    {parseComp(parsePages(data, currentPage, numRows), tempFormat, idHandler)}
                </tbody>
            </Table>
            {genButtons(numPages, currentPage, pageHandler)}
        </div>
    );
}

function parseComp(cities, format, idHandler) {
    let i = 0, newComps = [];
    _.forEach(cities, (ct) => { newComps.unshift(<CityCard city={ct} handler={idHandler} tempFormat={format} key={i++} />) });
    return newComps;
}

function parsePages(data, currentPage, numRows) {
    const start = (currentPage - 1) * numRows
    const end = start + numRows;
    return data.slice(start, end);
}

function genButtons(numPages, currentPage, pageHandler) {
    const buttons = [];
    let i = 0;
    for (; i < numPages; ++i) {
        buttons.push(<li key={1001 + i} className="p-1 page-item"><Button className="page-link" onClick={pageHandler} disabled={i === (Number(currentPage) - 1)} value={i + 1}> {i + 1} </Button></li>)
    }

    if (numPages > 1) {
        buttons.unshift(<li key={1000} className="p-1 page-item"><Button className="page-link" onClick={pageHandler} disabled={Number(currentPage) === 1} value="prev"> &#10096; </Button></li>)
        buttons.push(<li key={numPages + 1001} className="p-1 page-item"><Button key={numPages} className="page-link" onClick={pageHandler} disabled={Number(currentPage) === numPages} value="next"> &#10097; </Button></li>)
    }

    return (
        <div className="text-center">
            <ul className="d-flex" style={{ "listStyleType": "none" }}>
                {buttons}
            </ul>
        </div>
    );
}