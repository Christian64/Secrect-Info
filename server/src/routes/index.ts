import { Router } from "express";
import { create, messages, getMessage } from "../controller/index";
const routes = Router();

routes.post("/", create);
routes.get("/list", messages);
routes.post("/:id", getMessage);

export default routes;
