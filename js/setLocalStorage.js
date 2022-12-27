const KEY = "PWW";

function setDataInLS(path, value) {
    window.localStorage.setItem(KEY + path, JSON.stringify(value));
}

function getDataFromLS(path) {
    return window.localStorage.getItem(KEY + path)
}
function removeFromLS(path) {
    window.localStorage.removeItem(KEY + path)
}
