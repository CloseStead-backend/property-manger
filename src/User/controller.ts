import User from "./model";
import { Request, Response } from "express";
import { UserSchema, option, updateSchema } from "../utils";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { error, value } = UserSchema.validate(req.body, option);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const user = await User.create(value);
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const getAll = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { error, value } = updateSchema.validate(req.body, option);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const user = await User.findByIdAndUpdate(id, value, { new: true });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json(error);
  }
};
