import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const createSpecificationsRepository = SpecificationRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(createSpecificationsRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };
