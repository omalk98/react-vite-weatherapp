

export default function SearchOptions() {
    return (
            <div className="flex mb-4 pb-2 text-white" style={{ 'marginTop': '10px' }}>
                <span className="ps-4">
                    <div className="form-check form-check-inline">
                        <input id="wt_C" className="form-check-input" type="radio" name="inlineRadioOptions"
                            value="celsius" defaultChecked />
                        <label className="form-check-label" htmlFor="inlineRadio1">C°</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input id="wt_F" className="form-check-input" type="radio" name="inlineRadioOptions"
                            value="fahrenheit" />
                        <label className="form-check-label" htmlFor="inlineRadio2">F°</label>
                    </div>
                </span>

                <span className="ms-5 ps-5 ">
                    <div className="form-check form-check-inline">
                        <input id="wt_clear" className="btn btn-sm btn-primary" type="button"
                            name="inlineRadioOptions" value="Clear Cards" />
                    </div>
                </span>
            </div>
    );
}