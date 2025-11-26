import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Message sent successfully",
        data: message 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to send message" 
        });
      }
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({ success: true, data: messages });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to retrieve messages" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
