import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  const { username, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.json({ message: "Email already exists" });

  const hash = await bcrypt.hash(password, 10);

  await User.create({
    username,
    email,
    passwordHash: hash,
  });

  res.json({ message: "Registered successfully" });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({ token });
}
