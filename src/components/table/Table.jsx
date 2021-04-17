import React, { useCallback } from 'react'
import { useTable, useBlockLayout } from 'react-table'
import { FixedSizeList } from 'react-window'
import useWindowHeight from "../hooks/useWindowHeight";
const Table = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useBlockLayout,
  )

  const RenderRow = useCallback(({ index, style }) => {
    const row = rows[index]
    prepareRow(row)
    return (
      <div {...row.getRowProps({ style, })} className='tr'>
        {row.cells.map(cell => {
          return (
            <div {...cell.getCellProps()} className='td'>
              {cell.render('Cell')}
            </div>
          )
        })}
      </div>
    )
  },
    [prepareRow, rows]
  )

  return (
    <div {...getTableProps()} className='table'>
      <div className='thead'>
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className='tr' style={{ width: 'auto' }}>
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps()} className='th'>
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()} className='tbody'>
        <FixedSizeList
          height={useWindowHeight()}
          width={1500}
          itemCount={rows.length}
          itemSize={35}
        >
          {RenderRow}
        </FixedSizeList>
      </div>
    </div>
  )

}

export default Table;
