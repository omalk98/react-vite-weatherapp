var pageState = {
    data: [],
    current_page: 1,
    rows: 3
};

function pageHandler(button) {
    switch(button.value){
        case "prev": 
            if(pageState.current_page > 1) pageState.current_page -= 1;
            break;
        case "next":
            pageState.current_page += 1;
            break;
        default:
            pageState.current_page = Number(button.value);
    }
    genWeatherComponent(pageState.data);
}

function parsePages(state) {
    let trim = {
        start: (state.current_page - 1) * state.rows,
        end: 0,
    };
    trim.end = trim.start + state.rows;
    let data = state.data.slice(trim.start, trim.end);
    let pages = Math.ceil(state.data.length / state.rows);
    return { data: data, no_pages: pages };
}

function genButtons(pages) {
    for (i = 0; i < pages; ++i) {
        $("#wt_paginate").append(`<li class="page-item ${(i === pageState.current_page - 1) ? "disabled" : ""}">
        <button onclick=pageHandler(this) class="wt_page page-link" value="${i + 1}">${i + 1}</button></li>`);
    }
    if(pages > 1) {
        $("#wt_paginate").prepend(`<li class="page-item ${(pageState.current_page === 1) ? "disabled" : ""}">
                                <button onclick=pageHandler(this) class="wt_page page-link" value="prev">&#10096;</button></li>`);
        $("#wt_paginate").append(`<li class="page-item ${(pageState.current_page === pages) ? "disabled" : ""}">
                                <button onclick=pageHandler(this) class="wt_page page-link" value="next">&#10097;</button></li>`);
    }
}