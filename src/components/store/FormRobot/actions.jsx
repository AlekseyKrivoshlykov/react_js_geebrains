export const toggleProfile = () => ({
    type: 'addMessage'
});

export const addMessageWithThunk = (value) => (dispatch) => {
    setTimeout(() => dispatch(toggleProfile()), 2000);
}
