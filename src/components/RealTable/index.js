import React from 'react';
import './index.css';

const RealTable = ({columns, data, title}) => {
    const bodyCell = (user, i) => {
        const cells = columns.map(({accessor}) => {
            if(accessor === 'img') {
                return (
                    <td
                        key={`${accessor}${i}${user.id}`}
                    >
                        <img src={user[accessor]} alt={`Avatar of ${user.name}`} />
                    </td>
                )
            }
            if (accessor === 'email') {
                return (
                    <td
                        key={`${accessor}${i}${user.id}`}
                    >
                        <a class="mail" href={`mailto${user[accessor]}`}>{user[accessor]}</a>
                    </td>
                )
            }
            return (
                <td
                    key={`${accessor}${i}${user.id}`}
                >
                    {user[accessor]}
                </td>
            )
        })
        return <tr key={user.id}>{cells}</tr>
    }

    const bodyRows = data.map(user => (
        bodyCell(user)
    ));

    return (
        <table aria-label={title}>
            <thead>
                <tr>
                    {columns.map(({name}) => <th key={name}>{name}</th>)}
                </tr>
            </thead>
            <tbody>
                {bodyRows}
            </tbody>
        </table>
    )
};

export default RealTable;
