import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

const clientRoutes = [
  "/", 
  "/user-sessions/new", 
  "/users/new", 
  "/projects/:id", 
  "/scraper", 
  "/wood-info", 
  "/dev-info",
  "/settings",
  "/crm"
]
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router