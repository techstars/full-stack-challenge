//React
import React from 'react'

//AG Grid
import { AgGridReact, AgGridReactProps } from 'ag-grid-react'
import { ColumnResizedEvent, ICellRendererParams } from 'ag-grid-community'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

//Helpers
import { MakeIDLink } from './helpers'

//Types
import { Company } from '../types'

interface Props extends AgGridReactProps {
  data: Company[]
  handleShowModal: (e: any) => void
  onColumnResized?: (event: ColumnResizedEvent) => void
}

const Table: React.FC<Props> = ({ data, handleShowModal, onColumnResized }): JSX.Element => {
  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={data}
        onColumnResized={onColumnResized}
        gridOptions={{
          rowHeight: 45,
          defaultColDef: {
            flex: 100,
            wrapText: true,
            autoHeight: true,
          },
          columnDefs: [
            {
              field: 'id',
              resizable: true,
              initialSort: 'asc',
              maxWidth: 100,
              cellRendererFramework: (value: ICellRendererParams | any) =>
                MakeIDLink(value, handleShowModal),
            },
            { field: 'name', resizable: true, sortable: true, maxWidth: 150 },
            {
              field: 'short_description',
              resizable: true,
              sortable: true,
              minWidth: 500,
              headerName: 'Short Description',
            },
            { field: 'city', resizable: true, sortable: true },
            { field: 'state', resizable: true, sortable: true, maxWidth: 150 },
          ],
          pagination: true,
          paginationPageSize: 20,
        }}
      ></AgGridReact>
    </div>
  )
}

export default Table
