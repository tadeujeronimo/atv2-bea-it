import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCategoryService } from "./updateCategoryService";

class UpdateCategoryController {
  async handle(
    req: Request,
    res: Response
  ): Promise<Response | NextFunction | undefined> {
    const { id } = req.params;
    // O service aplica validacoes de existencia e unicidade de nome.
    const body = req.body;
    const updateCategoryService = container.resolve(UpdateCategoryService);
    await updateCategoryService.execute(id, body);
    return res.sendStatus(204);
  }
}

export default new UpdateCategoryController();
