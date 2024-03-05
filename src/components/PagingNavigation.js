export default function PagingNavigation({ handlePageChange, currentPage, totalPages }) {
  return (
    <div className="grid grid-cols-11">
      {/* Previous page button */}
      <button
        className="p-1 mr-2 bg-gray-200 rounded-lg"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {'<'}
      </button>

      {/* First page button */}
      <button
        className={`p-1 mx-1 ${
          currentPage === 1
            ? 'bg-gray-600 text-white'
            : 'bg-gray-200 text-gray-700'
        } rounded-lg`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>

      {/* Ellipsis if currentPage is greater than 2 */}
      {currentPage > 3 && <span className="p-1 mx-1 text-gray-700">...</span>}

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        // Only show up to 3 page numbers around the current page
        if (
          index >= currentPage - 3 && // Show pages before the current page
          index <= currentPage + 1 && // Show pages after the current page
          index !== 0 && // Exclude the first page (already shown)
          index !== totalPages - 1 // Exclude the last page (will be shown separately)
        ) {
          return (
            <button
              key={index}
              className={`p-1 mx-1 ${
                currentPage === index + 1
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              } rounded-lg`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          );
        }
        return null; // Hide other page numbers
      })}

      {/* Ellipsis if currentPage is less than totalPages - 1 */}
      {currentPage < totalPages - 3 && <span className="p-1 mx-1 text-gray-700">...</span>}

      {/* Last page button */}
      {totalPages > 1 && (
        <button
          className={`p-1 mx-1 ${
            currentPage === totalPages
              ? 'bg-gray-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } rounded-lg`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}

      {/* Next page button */}
      <button
        className="p-1 ml-2 bg-gray-200 rounded-lg"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {'>'}
      </button>
    </div>
  )
}