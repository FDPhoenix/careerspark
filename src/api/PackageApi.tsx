import axios from "axios";

export const getPackages = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/packages/`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching packages:", error);
        throw error;
    }
};
