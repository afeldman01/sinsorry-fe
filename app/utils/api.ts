class ApiHelper {
  constructor() {}
  async get(url: string) {
    return url;
  }
  async post(url: string, data?: any) {
    return this.sendRequest(url, data);
  }
  async sendRequest(url: string, data?: any) {
    return { data, url } as any;
  }
}

const apiHelper = new ApiHelper();
export { ApiHelper, apiHelper };
