import { useEffect, useState } from "react"
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "../../HOCs/PrivateRoute"
import { CharactersPage } from "../../pages/Characters"
import { ChatList, ChatMessages, ChatsPage } from "../../pages/Chats"
import { Home } from "../../pages/Home"
import { NotFoundPage } from "../../pages/NotFoundPage"
import { ProfilePage } from "../../pages/Profile"
import { SignInPage } from "../../pages/SignIn"
import { SignUpPage } from "../../pages/SignUp"
import { firebaseAuth, firebaseLogOut } from "../../services/firebase"

export const Routing = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
            })
    }, []);

    const handleLogout = async () => {
        await firebaseLogOut();
        <Navigate to="/sign_in" />
      }


    return (
        <BrowserRouter>
            <div className="nav_bar_menu">
                <Link to  = '/'>Главная страница</Link>
                <Link to  = '/chats'>Чаты</Link>
                <Link to  = '/profile'>Профиль</Link>
                <Link to  = '/characters'>Данные API</Link>
                <Link to  = '/sign_up'>Sign Up</Link>
                <Link to  = '/sign_in'>Sign In</Link>
                <button onClick={handleLogout}>Logout</button>
            </div>

            <div>
                <Routes>
                    <Route path='/' element = {<Home />}></Route>
                    <Route path='/chats' element = {<ChatsPage />}>
                        <Route path=":chatId" element = {<ChatsPage />}></Route>
                    </Route>
                    {/* <Route path='/profile' element = {<ProfilePage />}></Route> */}
                    <Route
                        path="/profile"
                        element={<PrivateRoute auth={authed} component={<ProfilePage />} />}
                    />
                    <Route path="/no_chat" element = {<NotFoundPage/>}></Route>
                    <Route path='/characters' element = {<CharactersPage />}></Route>
                    <Route path='/sign_up' element = {<SignUpPage />}></Route>
                    <Route path='/sign_in' element = {<SignInPage />}></Route>
                    
                </Routes>
            </div>
        </BrowserRouter>
    )
}
