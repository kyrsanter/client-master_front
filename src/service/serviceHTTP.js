export default class ServiceHTTP {
    baseUrl = `http://127.0.0.1:3333/api/`;

    loginUser = async (userData) => {
        try {
            let res = await fetch(`${this.baseUrl}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (res.status === 401) {
                return await res;
            }
            let result = await res.json();
            return result;
        }
        catch (error) {
            console.log('loginUser SERVICE', error)
        }
    };

    registrUser = async (userRegData) => {
        let response = await fetch(`${this.baseUrl}auth/registration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRegData)
        });
        return response;
    };

    getProfile = async (id) => {
        let token = localStorage.getItem('user');
        let response = await fetch(`${this.baseUrl}profile/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response;
    };

    updatePhoto = async (id, photo, prevPhoto) => {
        let formData = new FormData();
        formData.append('photo', photo, photo.name);
        formData.append('prevPhoto', prevPhoto);
        let response = await fetch(`${this.baseUrl}update-photo/${id}`, {
            method: 'POST',
            body: formData,
        });
        return response;
    }

    getServices = async () => {
        let response = await fetch(`${this.baseUrl}services`);
        return response;
    };

    getCitiesAPI = async () => {
        let response = await fetch('https://api.hh.ru/areas/5');
        return response;
    }

    init = async () => {
        let token = localStorage.getItem('user');
        if (!token) {
            return false
        }
        let response = await fetch(`${this.baseUrl}init`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response;
    };

    getUsers = async (params) => {
        let url = `${this.baseUrl}people?`;
        for (let p in params) {
            url = `${url}${p}=${encodeURIComponent(params[p])}&`
        }
        console.log(url);
        let response = await fetch(url);
        return response;
    }

}

