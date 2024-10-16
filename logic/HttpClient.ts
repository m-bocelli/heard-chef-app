export class HttpClient {
  static baseUrl: string;

  static async Get(route: string) {
    try {
      const res = await fetch(this.baseUrl + route);
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(`GET ${route} ${err}`);
    }
  }

  static async Post(route: string, body?: object) {
    try {
      const res = await fetch(this.baseUrl + route, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(`POST ${route} ${err}`);
    }
  }

  static async Delete(route: string) {
    try {
      const res = await fetch(this.baseUrl + route, {
        method: "DELETE",
      });
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(`DELETE ${route} ${err}`);
    }
  }
}
