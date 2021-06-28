import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useFilters, useSortBy } from 'react-table';


const Tables = () => {

    const [data, setData] = useState([])
    const [filterInput, setFilterInput] = useState("");

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("show.name", value);
        setFilterInput(value);
    };


    useEffect(() => {

        (async () => {
            const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
            setData(result.data);
        })();


    }, [])

    const Genres = ({ values }) => {
        // Loop through the array and create a badge-like component instead of a comma-separated string
        return (
            <>
                {values.map((genre, idx) => {
                    return (
                        <span key={idx} className="badge bg-success me-2" >
                            {genre}
                        </span>
                    );
                })}
            </>
        );
    };

    const columns = useMemo(
        () => [
            {
                // first group - TV Show
                Header: "TV Show",
                // First group columns
                columns: [
                    {
                        Header: "Name",
                        accessor: "show.name"
                    },
                    {
                        Header: "Type",
                        accessor: "show.type"
                    }
                ]
            },
            {
                // Second group - Details
                Header: "Details",
                // Second group columns
                columns: [
                    {
                        Header: "Language",
                        accessor: "show.language"
                    },
                    {
                        Header: "Genre(s)",
                        accessor: "show.genres",
                        Cell: ({ cell: { value } }) => <Genres values={value} />
                    },
                    {
                        Header: "Runtime",
                        accessor: "show.runtime",
                        Cell: ({ cell: { value } }) => {
                            const hour = Math.floor(value / 60);
                            const min = Math.floor(value % 60);
                            return (
                                <>
                                    {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
                                    {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
                                </>
                            );
                        }
                    },
                    {
                        Header: "Status",
                        accessor: "show.status"
                    }
                ]
            }
        ],
        []
    );





    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
        setFilter
    } = useTable({
        columns,
        data
    },
        useFilters,
        useSortBy);



    return (
        <div>
            <input
                value={filterInput}
                onChange={handleFilterChange}
                placeholder={"Search name"}
            />
            <table class="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Tables
