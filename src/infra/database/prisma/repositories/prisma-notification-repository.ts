import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Notification } from './../../../../../src/app/entities/notification';
import { NotificationRepository } from './../../../../../src/app/repositories/notification-repository';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    category,
    content,
    recipientId,
    createdAt,
    readAt,
    id,
  }: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id,
        category,
        content: content.value,
        recipientId,
        readAt,
        createdAt,
      },
    });
  }
}
