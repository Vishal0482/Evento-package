import React from 'react'

function Paggination({ allEvents, setPageNo, pageNo }) {
    console.log("page no >> ",pageNo, " All events page>> ", allEvents.page, " all events total >> ", allEvents.total , " all events last page >> ", allEvents.last_page);
    return (
        <div className="pagination-festum">
            <p className="show-text">Showing {(allEvents?.page -1)*3} to {Math.min(allEvents?.page*3, allEvents?.total)} Of {allEvents?.total} Events</p>
            <ul className="">
                {allEvents.page > 1 && <li onClick={() => {
                    console.log("back");
                    setPageNo(current => current-1)
                }
                }>
                    <button className="btns"><svg width="9" height="14" viewBox="0 0 9 14" fill="#25364f" xmlns="http://www.w3.org/2000/svg"><path d="M7.47003 13.4701L8.99615 11.9439L4.051 6.99873L8.99616 2.05357L7.47003 0.5274L0.998702 6.99873L7.47003 13.4701Z" className="fill-current" /></svg></button>
                </li>}

                <li onClick={() => setPageNo(allEvents?.page)}>
                    <button className={"btns active"}><span>{allEvents?.page}</span></button>
                </li>



                {/* { !(allEvents?.page < allEvents.last_page) && <li>
                    <button className={"btns"}><span>{allEvents?.page - 2}</span></button>
                </li>}

               {allEvents?.page - 1 > 0 && <li onClick={() => setPageNo(allEvents?.page-1)}>
                    <button className={"btns"}><span>{allEvents.page -1 }</span></button>
                </li>}

                <li onClick={() => setPageNo(allEvents?.page)}>
                    <button className={"btns active"}><span>{allEvents?.page}</span></button>
                </li>
                
                { allEvents?.page < allEvents.last_page && <li onClick={() => setPageNo(allEvents?.page+1)}>
                    <button className={"btns"}><span>{allEvents?.page + 1}</span></button>
                </li>}

                {!(allEvents?.page - 1 > 0) && <li >
                    <button className={"btns"}><span>{allEvents.page + 2 }</span></button>
                </li>} */}


                
                {allEvents.page < Math.ceil(allEvents.total/3) && <li onClick={() => setPageNo(current => current+1)}>
                    <button className="btns"><svg width="8" height="14" viewBox="0 0 8 14" fill="#25364f" xmlns="http://www.w3.org/2000/svg"> <path d="M1.52612 0.527405L-2.66844e-07 2.05358L4.94516 6.99874L-1.99612e-06 11.9439L1.52612 13.4701L7.99745 6.99874L1.52612 0.527405Z" className="fill-current" /> </svg></button>
                </li>}
            </ul>
        </div>
    )
}

export default Paggination;
