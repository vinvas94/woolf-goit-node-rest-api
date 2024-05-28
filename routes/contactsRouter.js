import express from "express";

import ctrl from "../controllers/contactsControllers.js";

import validateBody from "../middlewares/validateBody.js";

import schemas from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getOneContact);

contactsRouter.delete("/:id", ctrl.deleteContact);

contactsRouter.post(
  "/",
  validateBody(schemas.createContactSchema),
  ctrl.createContact
);

contactsRouter.put(
  "/:id",
  validateBody(schemas.updateContactSchema),
  ctrl.updateContactId
);

export default contactsRouter;
