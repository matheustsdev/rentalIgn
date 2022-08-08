import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ description, name }: IRequest): void {
    const SpecificationAlreadyExists = this.specificationsRepository.findByName(name);

    if (SpecificationAlreadyExists) {
      throw new Error('Specification already exists!');
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
