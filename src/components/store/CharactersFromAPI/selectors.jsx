// export function getCharacters(store) {
//     return store.characters;
// }

export function selectCharacters (store) {
    return store.characters.characters;
}

export function selectCharactersError (store) {
    return store.characters.error;
}

export function selectCharactersLoading (store) {
    return store.characters.loading;
}

