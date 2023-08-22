import httpService from "./HttpService";

class WordGameService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }
  verify = async (word) => {
    const response = await this.axios.post(`/word/${word}`);
    return response.data;
  };
}
const wordGameService = new WordGameService();

export default wordGameService;
