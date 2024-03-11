import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckIn } from '@prisma/client'

interface FetchUserCheckInsHystoryUseCaseRequest {
  userId: string
  page: number
}

interface FetchUserCheckInsHystoryUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckInsHystoryUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckInsHystoryUseCaseRequest): Promise<FetchUserCheckInsHystoryUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
