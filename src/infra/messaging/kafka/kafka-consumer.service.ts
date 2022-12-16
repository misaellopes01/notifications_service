import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['golden-rodent-12803-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Z29sZGVuLXJvZGVudC0xMjgwMyROapGX2oijStw0Pi_iTIILuu-iRgp_1N-GRm0',
          password:
            'EttfOEy_Ah8Ceu2HteaGZyKQKbEa9_hfUMhUYi72WxRdJuPtppaUAK5DOosDUjEdLLobLg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
