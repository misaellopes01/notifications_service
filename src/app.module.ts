import { Module } from '@nestjs/common';
import { NotificationsController } from './infra/http/controllers/notifications.controller';
import { HttpModule } from './infra/http/http.module';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
