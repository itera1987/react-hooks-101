import React, { useContext } from "react"

import AppContext from "../contexts/AppContext";

import { actions } from "../actions";

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const id = event.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`id=${id}を消すか？`)
        
        if (result) dispatch({ type: actions.DELETE_EVENT, id: id })
    }

    return (
    <tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
    ) 
}

export default Event