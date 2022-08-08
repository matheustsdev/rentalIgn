import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

const specificationsRepository = SpecificationRepository.getInstance();

specificationsRoutes.post('/', (request, response) => {
  createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
