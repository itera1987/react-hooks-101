import React, { useContext, useState } from "react"

import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

import { actions } from "../actions";

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const addEvent = e => {
    e.preventDefault()

    dispatch({
        type: actions.CREATE_EVENT,
        title,
        body,
    })

    dispatch({
        type: actions.ADD_OPERATION_LOG,
        description: "made event",
        operatedAt: timeCurrentIso8601(),
    })

        setTitle("")
        setBody("")
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm("すべて滅ぼしてもよいか？")
        
        if (result) {
            dispatch({ type: actions.DELETE_ALL_EVENT })
            dispatch({
                type: actions.ADD_OPERATION_LOG,
                description: "destroy all humans",
                operatedAt: timeCurrentIso8601(),
            })
        } 
    }

    const unCreatable = title === "" || body === ""

    const deleteAllOperationLogs = e => {
        e.preventDefault()
        const result = window.confirm("月光蝶？")

        if(result) {
            dispatch({
                type: actions.DELETE_ALL_OPERATION_LOGS,
            })
        }
    }

    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="formEventBody">ボデー</label>
                    <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>すべてのインドを削除する</button>
                <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>すべての操作ログを削除する</button>
            </form>
        </>
    )
}

export default EventForm