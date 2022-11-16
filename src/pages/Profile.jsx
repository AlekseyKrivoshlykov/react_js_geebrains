import { store } from '../components/store/index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfile } from '../components/Profile/action';

export const Profile = () => {
    // const state = store.getState();
    const dispatch = useDispatch();

    const name = useSelector((state) => state.name);
    const visible = useSelector((state) => state.visible);

    return (
        <>
            <div>Hello, user! How are you?</div>
            <p>name: {name}</p>
            <p>visible: </p>
            <input type="checkbox" checked={visible}/>
            <button onClick={() => dispatch(toggleProfile())}>change visible</button>
        </>
        )
}
