import React from 'react'
import './style.css';
const Pagination = ({ nPages, currentPage, setCurrentPage, paginationDay }) => {
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    // const pageNumbers = weekday[pageNumber];
    console.log("pageNumbers", pageNumbers)
    // map the numbers with the weekday
    // style of pagination
    // map the data from the weekday

    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a
                    className= {`page-link ${currentPage === 1 ? 'disabled' : ''} `} 
                        onClick={prevPage} 
                        href='#'>
                        
                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className= {`page-link ${currentPage === nPages ? 'disabled' : ''} `}  
                        onClick={nextPage}
                        href='#'>
                        
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination