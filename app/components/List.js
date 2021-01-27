import React from 'react'

export default class List extends React.Component {
    render() {
        const myList = ["Jake", "Jared", "Devon", "Maddie", "Cass"]

        return (
            <ul>
                {myList.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        )
    }
}