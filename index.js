import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/telegram-message", async (req, res) => {
  const { message, token } = req.body;

  if (!message || !token) {
    return res.status(400).json({ error: "Message and token are required." });
  }

  if (token !== process.env.SECRET_TOKEN) {
    return res.status(403).json({ error: "Invalid token." });
  }

  const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await axios.post(TELEGRAM_API_URL, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
    });

    if (response.data.ok) {
      res.status(200).json({ success: true, message: "Message sent successfully." });
    } else {
      res.status(500).json({ error: "Failed to send message." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
