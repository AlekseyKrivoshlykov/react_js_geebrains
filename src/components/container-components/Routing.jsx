import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { CharactersPage } from "../../pages/Characters"
import { ChatList, ChatMessages, ChatsPage } from "../../pages/Chats"
import { Home } from "../../pages/Home"
import { NotFoundPage } from "../../pages/NotFoundPage"
import { ProfilePage } from "../../pages/Profile"

export const Routing = () => {

    return (
        <BrowserRouter>
            <div className="nav_bar_menu">
                <Link to  = '/'>Главная страница</Link>
                <Link to  = '/chats'>Чаты</Link>
                <Link to  = '/profile'>Профиль</Link>
                <Link to  = '/characters'>Данные API</Link>
            </div>

            <div>
                <Routes>
                    <Route path='/' element = {<Home />}></Route>
                    <Route path='/chats' element = {<ChatsPage />}>
                        <Route path=":chatId" element = {<ChatsPage />}></Route>
                    </Route>
                    <Route path='/profile' element = {<ProfilePage />}></Route>
                    <Route path="/no_chat" element = {<NotFoundPage/>}></Route>
                    <Route path='/characters' element = {<CharactersPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
