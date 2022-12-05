import { onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { chatsRef } from "../../services/firebase";
import Item from "./Item";

export const ChatList = ({ chatss, chatId }) => {

    const[chats, setChats] = useState([])

    useEffect(() => {
        onValue(chatsRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
            const newChats = Object.entries(data).map((item) => ({
            id: item[0],
            ...item[1]
            }))
            setChats(newChats)
            console.log(newChats)
        }
        })
    }, [])

    return (
        <div>
            <div className="row justify-content-center">
                {
                    chats.map((item) =>
                        <Item item={item} key={item.id} />
                    )
                }
            </div>
        </div>
    )

    // <>
    //     <div>
    //         {Object.keys(chats).map((id, i) => (
    //             <div style={{marginBottom: 1 + 'rem'}} key={i}>
    //                 <Link to={`/chats/${id}`}>
    //                     <b style={{ color: id === chatId ? "#000000" : "grey" }}>
    //                         { chats[id].name }
    //                     </b>
    //                 </Link>
    //             </div>
    //         ))}
    //     </div>
    // </>
};