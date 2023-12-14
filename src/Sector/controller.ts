import { Request, Response } from "express";
import { SectorSchema, option } from "../utils";
import Sector from "./model";

export const createSector = async (req: Request, res: Response) => {
  try {
    const { error, value } = SectorSchema.validate(req.body, option);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const sector = await Sector.create(value);
    return res.status(201).json({ sector });
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const getSector = async (Req: Request, res: Response) => {
  try {
    const sector = await Sector.find();

    return res.status(200).json(sector);
  } catch (error) {
    return res.status(500).json(error);
  }
};
