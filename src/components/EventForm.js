import React, { useContext, useState } from "react"

import AppContext from "../contexts/AppContext";

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

        setTitle("")
        setBody("")
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm("すべて滅ぼしてもよいか？")
        if (result) dispatch({ type: actions.DELETE_ALL_EVENT })
    }

    const unCreatable = title === "" || body === ""

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
                <button className="btn btn-primary">すべての操作ログを削除する</button>
            </form>
        </>
    )
}

export default EventForm