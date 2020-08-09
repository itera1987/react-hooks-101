import React, { useState, useReducer } from 'react';

import Event from "./Event"
import reducer from "../reducers";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    })

    setTitle("")
    setBody("")
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm("すべて滅ぼしてもよいか？")
    if (result) dispatch({ type: "DELETE_ALL_EVENT" })
  }

  const unCreatable = title === "" || body === ""

  return (
    <div className="container-fluid">
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
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>すべてのインドを削除する</button>
        <button className="btn btn-primary">すべての操作ログを削除する</button>

        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボデー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />)) }
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
