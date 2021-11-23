import express from "express";
import { createUser } from "../controllers/users.js";
import { getUser } from "../controllers/users.js";
import { getDetail } from "../controllers/users.js";
import { deleteUser } from "../controllers/users.js";
import { updateUser } from "../controllers/users.js";

const router = express.Router();

router.get('/', getUser);

router.post('/', createUser);

router.get('/:id' , getDetail);

router.delete('/:id', deleteUser);

router.patch('/:id' , updateUser);

export default router;