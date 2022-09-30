import { Specification } from '../../entities/Specification';
import { ICreateSpecificationDTO, ISpecificationRepository } from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!SpecificationRepository.INSTANCE) {
      return (SpecificationRepository.INSTANCE = new SpecificationRepository());
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => {
      return specification.name === name;
    });

    return specification;
  }
}

export { SpecificationRepository };
