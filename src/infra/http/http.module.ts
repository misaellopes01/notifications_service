import { Module } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { GetRecipientNotification } from '@app/use-cases/get-recipient-notification';
import { ReadNotification } from '@app/use-cases/read-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification';
import { CountRecipientNotification } from '@app/use-cases/count-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotification,
  ],
})
export class HttpModule {}
