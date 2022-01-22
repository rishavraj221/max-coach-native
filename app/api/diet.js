// coach diet API's

import { clientWithHeaders } from "./client";

const endPoint = "/dietplan";

const getClientDiet = (token, coach_id, client_id) =>
  clientWithHeaders({
    token,
  }).get(`${endPoint}/getFullPlan/${coach_id}/${client_id}`);

const getFoods = (token) => clientWithHeaders({ token }).get("/calorieItems");

export { getClientDiet, getFoods };
