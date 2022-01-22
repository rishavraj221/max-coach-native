// application clients

import { clientWithHeaders } from "./client";

const endPoint = "/dietcian";

const getMyClients = (token, client_id) =>
  clientWithHeaders({
    token,
  }).get(`${endPoint}/getAssignedClient/${client_id}`);

export { getMyClients };
