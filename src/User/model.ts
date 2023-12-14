import { Schema, model } from "mongoose";

export interface ICreateUser {
  name: string;
  sector: Array<string>;
  term: boolean;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sector: {
      type: Array<string>,
      required: true,
    },
    term: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model<ICreateUser>("user", UserSchema);
export default User;
