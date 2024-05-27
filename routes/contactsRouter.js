import express from "express";

import ctrl from "../controllers/contactsControllers.js";

import validateBody from "../middlewares/validateBody.js";

import schemas from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.listContacts);

contactsRouter.get("/:id", ctrl.getContactById);

contactsRouter.delete("/:id", ctrl.removeContact);

contactsRouter.post(
  "/",
  validateBody(schemas.createContactSchema),
  ctrl.addContact
);

contactsRouter.put(
  "/:id",
  validateBody(schemas.updateContactSchema),
  ctrl.updateContactId
);

export default contactsRouter;
