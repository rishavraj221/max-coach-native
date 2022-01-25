// coach diet API's

import { clientWithHeaders } from "./client";

const endPoint = "/dietplan";

const getClientDiet = (token, coach_id, client_id) =>
  clientWithHeaders({
    token,
  }).get(`${endPoint}/getFullPlan/${coach_id}/${client_id}`);

const getFoods = (token) => clientWithHeaders({ token }).get("/calorieItems");

const createDietPlan = (token, body) =>
  clientWithHeaders({ token }).post(`${endPoint}/create_plan`, body);

const updateDietPlan = (token, body) =>
  clientWithHeaders({ token }).put(`${endPoint}/updateDietPlan`, body);

export { getClientDiet, getFoods, createDietPlan, updateDietPlan };
