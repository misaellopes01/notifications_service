import { makeNotification } from '@test/factories/notification-factory';
import InMemoryNotificationRepository from '@test/repositories/in-memory-notification-repository';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count all notifications of a recipient', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({
        recipientId: 'recipient-1',
      }),
    );
    await notificationRepository.create(
      makeNotification({
        recipientId: 'recipient-1',
      }),
    );
    await notificationRepository.create(
      makeNotification({
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toBe(2);
  });
});
