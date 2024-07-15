import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000",
});

const apis = {
    getAllmahasiswa: () => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`),
    CreateMahasiswa : (data) => api.post('/mahasiswa', data),
    updateMahasiswa : (nim, data) => api.put(`/mahasiswa/${nim}`, data),
    deleteMahasiswa : (nim) => api.delete(`/mahasiswa'/${nim}`),
};

export default apis;