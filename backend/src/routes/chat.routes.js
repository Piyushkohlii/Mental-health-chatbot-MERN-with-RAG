import express from 'express'
import { addConversation, createChat, deleteChat, getAllChats, getConversation } from '../controllers/chats.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post("/new" , verifyJWT,createChat)

router.get("/all" , verifyJWT,getAllChats)

router.post("/:id/message",verifyJWT , addConversation)

router.get("/:id/messages",verifyJWT, getConversation)

router.delete("/:id",verifyJWT,deleteChat)

export default router