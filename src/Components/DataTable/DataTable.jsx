import React from 'react'

const DataTable = ({ columns, data, conditionalRowStyles, currentPage}) => {
    const tableCustomStyles = {
        headRow: {
          style: {
            backgroundColor: "var(--table-header-bg)",
          },
        },
      }
      return (
        <DataTable
          columns={columns}
          data={data}
          paginationServer
          customStyles={tableCustomStyles}
          conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          paginationDefaultPage={currentPage}
        />
      )
}

export default DataTable