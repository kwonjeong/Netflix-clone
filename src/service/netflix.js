class Netflix {
  constructor(httpClient) {
    this.netflix = httpClient;
  }

  async trending() {
    const response = await this.netflix.get('trending/all/week', {
      params: { api_key: '0e0557d30cb081c44920e8ce37a4560c' },
    });
    return response.data.results;
  }
}
export default Netflix;
