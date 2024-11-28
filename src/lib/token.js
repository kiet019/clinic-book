export const getAccessToken = () => {
    return localStorage.getItem("accessToken")
}
export const setAccessToken = (accessToken) => {
    return localStorage.setItem("accessToken", accessToken)
}