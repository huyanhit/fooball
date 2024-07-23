const apiDomain = 'http://tasks.local/api/';
const auth = JSON.parse(localStorage.getItem('auth'));
export const callApi = async (uri, method, params = null) =>{
    const response = await fetch(apiDomain + uri, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ auth?.token
        },
        body: params
    });

    return await response.json();
}
