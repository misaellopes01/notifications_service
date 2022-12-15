import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { AppService } from './infra/app.service';
import { HttpModule } from './infra/http.module';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
