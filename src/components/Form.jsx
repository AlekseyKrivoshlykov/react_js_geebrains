// import { useEffect } from "react";
// import { useState } from "react"
import React from 'react'

/* 3 задание:
        Добавить и стилизовать форму - поле для ввода текста и кнопка для отправки сообщения.
    При отправке сообщения обновление UI должно происходить за счет обновления стейта App. 
*/

export class Form extends React.Component {
    state = {
        name: 'lala'
    }

    preventDefault = (ev) => {
        ev.preventDefault()
    }

    handleChangeName = (ev) => {
        this.setState({ name: ev.target.value })
    }

    render() {
        return <div className="form_wrapp">
                <form className="form_class" onClick={this.preventDefault}>
                    <input className="form_input" type="text" onChange={this.handleChangeName} />
                    <div>{this.state.name}</div>
                    <br/>
                    <button className="form_button">Click</button>
                    </form>
            </div>
            
    } 
}