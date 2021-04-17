import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Table from './Table'
import StyledSelect from './StyledSelect'
import SelectOption from './SelectOption'
import productGroups from '../../data/product_groups'
import shelves from '../../data/shelves'
import FilterBar from '../filterBar/FilterBar'
import { updateRow } from '../../redux/actions'
import EmptyState from './EmptyState'


const ProductsTable = ({
    useFilteredData,
    filteredData,
    tableRows,
    changeSelect,
    filterString,
    emptyState
}) => {

    const visibleTableRows = () => {
        if (useFilteredData === true && filteredData.length > 0) {
            return filteredData
        } else if (useFilteredData === true && filteredData.length < 1) {
            return tableRows
        } else return tableRows
    }
    const data = useMemo(() => visibleTableRows(), [visibleTableRows()])
    const columns = useMemo(() => [
        {
            Header: 'EAN/PLU',
            accessor: 'ean_plu',
            width: 150,
        },
        {
            Header: 'Name',
            accessor: 'name',
            width: 250,
        },
        {
            Header: 'Producer',
            accessor: 'producer',
            width: 150,
        },
        {
            Header: 'Size',
            accessor: 'wt_vol_pce',
            width: 100,
        },
        {
            Header: 'Shelf',
            accessor: 'shelf_id',
            width: 200,
            Cell: ({ cell }) => {
                return (
                    <StyledSelect defaultValue={cell.value} onChange={() => changeSelect(cell, 'shelf_id', cell.value)}>
                        {shelves.map((shelf, key) => {
                            return <SelectOption key={key} value={shelf.id} label={shelf.name} />
                        })}
                    </StyledSelect>
                )
            }
        },
        {
            Header: 'Product group',
            accessor: 'product_group_id',
            width: 200,
            Cell: ({ cell }) => {
                return (
                    <StyledSelect defaultValue={cell.value} onChange={() => changeSelect(cell, 'product_group_id', cell.value)}>
                        {productGroups.map((productGroup, key) => {
                            return <SelectOption key={key} value={productGroup.id} label={productGroup.name} />
                        })}
                    </StyledSelect>
                )
            }
        },
    ], []);

    return (
        <div>
            <FilterBar />
            {emptyState ? <EmptyState str={filterString} /> :
                <StyledTable>
                    <Table columns={columns} data={data}></Table>
                </StyledTable>
            }
        </div>
    )

}

const StyledTable = styled.div`
  padding: 0.2rem;

  .table {
        display: inline-block;
        border-spacing: 0;
        border: none;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;

        .tbody > div {
            overflow-x: unset !important; /* sorry!! */
        }

    .tr, .thead .tr {
        border-top: none;
        justify-content: flex-start;
        display: flex;
        border-bottom: 1px solid lightgrey;
    }
    
    .thead {
        width: 1500px;
    }

    .th,
    .td {
        margin: 0;
        padding: 0.2rem 1.5rem;
        font-size: 12px;
        color: black;
        font-weight: 200;
        line-height: 28px;
        font-family: Helvetica, Arial, sans-serif;
    }

    .th {
        text-transform: uppercase;
        font-weight: 600;
        text-align: left;
        color: grey;
    }
  }
`

const mapStateToProps = state => ({
    tableRows: state.data,
    filteredData: state.filteredData,
    useFilteredData: state.useFilteredData,
    filterString: state.filterString,
    emptyState: state.emptyState
})

const mapDispatchToProps = dispatch => {
    return {
        changeSelect: (cell, prop, val) => dispatch(updateRow(cell, prop, val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);
