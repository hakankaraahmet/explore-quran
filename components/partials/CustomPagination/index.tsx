import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

interface ICustomPagination {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (value:number) => void;
}

const CustomPagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}: ICustomPagination) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`pagination-item mx-1 border-2 border-secondary_color w-8 h-8  flex items-center justify-center rounded-full ${
            i === currentPage
              ? "bg-secondary_color text-primary_color"
              : "hover:bg-secondary_color hover:text-primary_color cursor-pointer"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination common-breakpoint flex justify-center items-center">
      <ul className="pagination-list flex ">
        <button
          className={`pagination-item mr-8 ${
            currentPage === 1 && "opacity-50"
          }`}
          disabled={currentPage === 1 ? true : false}
          onClick={() => currentPage !== 1 && handlePageChange(currentPage - 1)}
        >
          <GrPrevious size={32} />
        </button>
        <div className="flex items-center">{renderPageNumbers()}</div>
        <button
          className={`pagination-item ml-8 ${
            currentPage === totalPages && "opacity-50"
          }`}
          disabled={currentPage === totalPages ? true : false}
          onClick={() =>
            currentPage !== totalPages && handlePageChange(currentPage + 1)
          }
        >
          <GrNext size={32} />
        </button>
      </ul>
    </div>
  );
};

export default CustomPagination;
