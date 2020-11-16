import React from 'react';
import './index.css';

const Table = ({columns, data, title}) => {
    const bodyCell = (user, i) => {
        const cells = columns.map(({accessor}) => {
            if(accessor === 'img') {
                return (
                    <span
                        key={`${accessor}${i}${user.id}`}
                        className="table__body-cell"
                        role="cell"
                    >
                        <img src={user[accessor]} alt={`Avatar of ${user.name}`} />
                    </span>
                )
            }
            if (accessor === 'email') {
                return (
                    <span
                        role="cell"
                        key={`${accessor}${i}${user.id}`}
                        className="table__body-cell"
                    >
                        <a class="mail" href={`mailto${user[accessor]}`}>{user[accessor]}</a>
                    </span>
                )
            }
            return (
                <span
                    role="cell"
                    key={`${accessor}${i}${user.id}`}
                    className="table__body-cell"
                >
                    {user[accessor]}
                </span>
            )
        })
        return <div role="row" key={user.id} className="table__body-row">{cells}</div>
    }

    const bodyRows = data.map(user => (
        bodyCell(user)
    ));

    return (
        <div role="table" className="table" aria-label={title}>
            <div role="rowgroup" className="table__head">
                <div role="row" className="table__head-row">
                    {columns.map(({name}) => <span role="columnheader" key={name} className="table__head-cell">{name}</span>)}
                </div>
            </div>
            <div role="rowgroup" className="table__body">
                {bodyRows}
            </div>
        </div>
    )
};

export default Table;
