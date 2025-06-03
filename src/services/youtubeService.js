import axios from 'axios';

const API_KEY = 'AIzaSyCAkBAmGrOobVs9B2amsBe-EmiF_Cfz2ZI';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const youtubeService = {
  // Recherche de vidéos par mot-clé
  async searchVideos(query, maxResults = 5) {
    try {
      const response = await axios.get(`${BASE_URL}/search`, {
        params: {
          part: 'snippet',
          maxResults: maxResults,
          q: query,
          type: 'video',
          key: API_KEY
        }
      });
      return response.data.items;
    } catch (error) {
      console.error('Erreur lors de la recherche de vidéos:', error);
      return [];
    }
  },

  // Récupérer les détails d'une vidéo
  async getVideoDetails(videoId) {
    try {
      const response = await axios.get(`${BASE_URL}/videos`, {
        params: {
          part: 'snippet,statistics',
          id: videoId,
          key: API_KEY
        }
      });
      return response.data.items[0];
    } catch (error) {
      console.error('Erreur lors de la récupération des détails de la vidéo:', error);
      return null;
    }
  }
}; 