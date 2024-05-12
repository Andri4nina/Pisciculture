import axios from "axios";

const API = "http://localhost:8050"; 

const provendeService = {
    getAllProvendes: () => {
      return axios.get(`${API}/provende`);
    },
  
    saveProvende: (provende) => {
      return axios.post(`${API}/provende/saveProvende`, provende);
    },
  
    getProvendeById: (id) => {
      return axios.get(`${API}/provende/${id}`);
    },
  
    deleteProvende: (id) => {
      return axios.get(`${API}/provende/delete/${id}`);
    },
  
    editProvende: (provende, id) => {
      return axios.patch(`${API}/provende/editProvende/${id}`, provende);
    },
    
    commandeProvende: (provende, id) => {
      return axios.put(`${API}/provende/commande/${id}`, provende);
    },
    
    nourrirProvende: (provende, id) => {
        return axios.post(`${API}/provende/nourrir/${id}`, provende);
    },

    notifProvende: (id) => {
        return axios.post(`${API}/provende/notif/${id}`);
    }
  };

export default provendeService;