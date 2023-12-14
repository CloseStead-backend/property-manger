import { Schema, model } from "mongoose";

interface ISector {
  name: string;
}

const SectorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Sector = model<ISector>("sector", SectorSchema);

export default Sector;
