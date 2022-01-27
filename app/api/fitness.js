import { clientWithHeaders } from "./client";

const endPoint = "/fitnessPlan";

const createFitnessPlan = (token, body) =>
  clientWithHeaders({ token }).post(`${endPoint}/create`, body);

const getFullFitnessPlan = (token, coach_id, client_id) =>
  clientWithHeaders({ token }).get(
    `${endPoint}/getFullPlan/${coach_id}/${client_id}`
  );

export { createFitnessPlan, getFullFitnessPlan };
