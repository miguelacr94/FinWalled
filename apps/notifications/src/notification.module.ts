import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { CreateAccountUseCase } from "@app/account";
import { BrokerEvents } from "@app/shared";

@Controller()
export class AccountsController {
  constructor(private readonly createAccountUseCase: CreateAccountUseCase) {}

  @EventPattern(BrokerEvents.USER_CREATED)
  async handleUserCreated(
    @Payload() data: { userId: string; email: string; name: string },
  ) {
    console.log(
      `[Accounts Microservice] Received user.created event for user ${data.userId}`,
    );
    await this.createAccountUseCase.execute(data.userId);
  }
}
