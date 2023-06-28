import { Router } from "express";
import { create, list, getMessage } from "../controller/index";
const routes = Router();

routes.post("/", create);
routes.get("/list", list);
routes.post("/:id", getMessage);

export default routes;
