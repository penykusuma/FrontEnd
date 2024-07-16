import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000",
});

const apis = {
    getAllmahasiswa: () => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`),
};

export default apis;