import axios from 'axios';

const API_BASE_URL = 'https://committed-thrill-2c4d517edc.strapiapp.com/api';

export const fetchHeroSections = async () => {
  try {
    console.log("Sending request to Strapi...");
    const response = await axios.get(`${API_BASE_URL}/herosections?populate=*`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hero sections:", error);
    throw error;
  }
};