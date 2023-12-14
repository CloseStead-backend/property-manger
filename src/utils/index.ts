import Joi from "joi";

export const SectorSchema = Joi.object().keys({
  name: Joi.string().required(),
});
export const UserSchema = Joi.object().keys({
  sector: Joi.array().items(Joi.string()).required(),
  name: Joi.string().required(),
  term: Joi.boolean().required(),
});
export const updateSchema = Joi.object().keys({
  sector: Joi.array().items(Joi.string()).optional(),
  name: Joi.string().optional(),
  term: Joi.boolean().optional(),
});
export const option = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};
