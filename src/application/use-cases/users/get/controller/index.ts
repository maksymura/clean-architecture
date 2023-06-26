import {GetControllerStrategy} from "../../../types";
import {expressGetUserController, fastifyGetUserController} from "../di";

export const getUserController = (strategy: GetControllerStrategy) => {
  if (strategy === 'express') {
    return expressGetUserController;
  }

  return fastifyGetUserController;
}

