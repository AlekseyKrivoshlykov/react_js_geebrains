import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { set, push, remove } from "firebase/database";
import {  getChatById } from '../../services/firebase'

export default function Item({item}) {

  const handlerDelete = (id) => {
    remove(getChatById(id))
  }

  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{item.name ?? 'Chat name'}</h5>
          <p className="card-text">{item.is_checked ?? 'Is checked'}</p>
          <div className="btn-group">
            <button onClick={() => handlerDelete(item.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}
