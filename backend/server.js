import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// cors
app.use(
  cors({
    origin:  "*",
  })
);

// json parser
app.use(express.json({ limit: "100kb" }));

// db connect
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI missing in .env");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// model
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match:
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 5000,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// routes
app.get("/", (_req, res) => {
  res.json({ ok: true, message: "Contact API running" });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    // quick checks
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ ok: false, error: "name, email, and message are required" });
    }

    const doc = await Contact.create({ name, email, message });
    res.status(201).json({
      ok: true,
      id: doc._id,
      createdAt: doc.createdAt,
    });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    // handle validation errors nicely
    if (err.name === "ValidationError") {
      return res.status(400).json({ ok: false, error: err.message });
    }
    res.status(500).json({ ok: false, error: "internal server error" });
  }
});

// start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server listening on ${PORT}`));
