import { store } from '../components/store/index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfile } from '../components/store/Profile/action';
import { getProfileName, getProfileStatus } from '../components/store/Profile/selectors';

export const Profile = () => {
    const dispatch = useDispatch();
    // const name = useSelector((store) => store.profile.name);
    // const visible = useSelector((store) => store.profile.visible);
    const name = useSelector(getProfileName);
    const visible = useSelector(getProfileStatus);

    return (
        <>
            <div>Hello, {name}! How are you?</div>
            <p>visible: </p>
            <input type="checkbox" checked={visible} readOnly />
            <button onClick={() => dispatch(toggleProfile())}>Change visible</button>
        </>
    )
}
