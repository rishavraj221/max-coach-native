import { clientWithHeaders } from "./client";

const endPoint = "/fitnessPlan";

const createFitnessPlan = (token, body) =>
  clientWithHeaders({ token }).post(`${endPoint}/create`, body);

const getFullFitnessPlan = (token, coach_id, client_id) =>
  clientWithHeaders({ token }).get(
    `${endPoint}/getFullPlan/${coach_id}/${client_id}`
  );

const getVideos = (token, category) =>
  clientWithHeaders({ token }).get(`/video/videoByCategory/${category}`);

const updateFitnessPlan = (token, body) =>
  clientWithHeaders({ token }).put(`${endPoint}/updateVideo`, body);

export { createFitnessPlan, getFullFitnessPlan, getVideos, updateFitnessPlan };
