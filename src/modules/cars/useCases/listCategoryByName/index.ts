import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoryByNameController } from "./ListCategoryByNameController";
import { ListCategoryByNameUseCase } from "./ListCategoryByNameUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoryByNameUseCase = new ListCategoryByNameUseCase(
  categoriesRepository
);

const listCategoryByNameController = new ListCategoryByNameController(
  listCategoryByNameUseCase
);

export { listCategoryByNameController };