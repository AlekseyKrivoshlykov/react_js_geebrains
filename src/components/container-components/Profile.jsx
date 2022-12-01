import { store } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfile } from '../store/Profile/actions';
import { getProfileName, getProfileStatus } from '../store/Profile/selectors';
import ButtonUI from '../presentation-components/ButtonUI';
import InputUI from '../presentation-components/InputUI';

export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(getProfileName);
    const visible = useSelector(getProfileStatus);

    return (
        <>
            <h3>Hello, {name}! How are you?</h3>
            <InputUI visible={visible}/>
            <ButtonUI onClick={() => dispatch(toggleProfile())} />
        </>
    )
}
