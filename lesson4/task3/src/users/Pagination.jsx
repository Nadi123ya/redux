import React, { useEffect } from 'react';

const Pagination = ({ goPrev, goNext, currentPage, itemsPerPage, totalIteam }) => {
  const isPrevPageAvailable = currentPage <= 0 ? true : false;
  const isNextPageAvailable = currentPage >= Math.floor(totalIteam / itemsPerPage) ? true : false;

  useEffect(() => {
    const btn = document.querySelectorAll('.btn');

    const onPageChange = (event) => 
      event.target.dataset.nextPage ? goNext() :goPrev();
      
    
    btn.forEach(button => 
      button.addEventListener('click', onPageChange)
    );
    
    return () => {
      btn.forEach(button => 
        button.removeEventListener('click', onPageChange)
      );
    }
  })
  

  return (
    <div>
      <div className="pagination">
        <button data-prev-page="prev-page" disabled={isPrevPageAvailable} className="btn" >
          { 
            isPrevPageAvailable ? null : "←"
          }
        </button>
        <span className="pagination__page">{currentPage + 1}</span>
        <button data-next-page="next-page" disabled={isNextPageAvailable} className="btn">
          { 
            isNextPageAvailable ? null : "→"
          }
        </button>
      </div>
    </div>
  );
};

export default Pagination;