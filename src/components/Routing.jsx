import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { ChatList, ChatMessages, ChatsPage } from "../pages/Chats"
import { Home } from "../pages/Home"
import { NotFoundPage } from "../pages/NotFoundPage"
import { Profile } from "../pages/Profile"



export const Routing = () => {

    return (
        <BrowserRouter>
            <div className="nav_bar_menu">
                <Link to  = '/'>Главная страница</Link>
                <Link to  = '/chats'>Чаты</Link>
                <Link to  = '/profile'>Профиль</Link>
            </div>

            <div>
                <Routes>
                    <Route path='/' element = {<Home />}></Route>
                    <Route path='/chats' element = {<ChatsPage />}>
                        <Route path=":chatId" element = {<ChatsPage />}></Route>
                    </Route>
                    <Route path='/profile' element = {<Profile />}></Route>
                    <Route path="*" element = {<NotFoundPage/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
