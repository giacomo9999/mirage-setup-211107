import { createServer } from "miragejs";
import fakeAPIData from "./fakeAPIData";

export function makeServer() {
  createServer({
    routes() {
      this.get("/api/:id", (schema, req) => {
        let id = req.params.id;
        console.log("Server: GETting data for: ", id);
        return {
          [id]: fakeAPIData[id],
        };
      });
      this.post("/api/:id", (schema, req) => {
        let id = req.params.id;
        let responseId = id + "Response";
        console.log("Server: POSTing data: ", req.requestBody);
        return { [responseId]: fakeAPIData[responseId] };
      });
    },
  });
}
