import axios from "axios";

const service = axios.create({baseURL: `${import.meta.env.VITE_APP_URL_API}/api`});

export const filmsService = {
    all: () => service.get('films')
        .then(response => response.data.data)
        .catch(console.log),

    one: (id) => service.get(`films/${id}`)
        .then(response => response.data.data)
        .catch(console.log),
}