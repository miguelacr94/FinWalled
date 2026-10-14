import { NestFactory } from "@nestjs/core";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";

async function bootstrap() {
  const client = ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://user:password@localhost:5672"],
      queue: "notifications_queue",
      queueOptions: {
        durable: true,
      },
    },
  });

  await client.connect();
  await lastValueFrom(
    client.emit("deposit.completed", {
      depositId: "test-deposit",
      accountId: "test-account",
      amount: 100,
    }),
  );
  console.log("Emitted successfully");

  process.exit(0);
}
bootstrap();
