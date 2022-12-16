import { makeNotification } from '@test/factories/notification-factory';
import InMemoryNotificationRepository from '@test/repositories/in-memory-notification-repository';
import { GetRecipientNotification } from './get-recipient-notification';

describe('Count recipient notifications', () => {
  it('should be able to count all notifications of a recipient', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotification = new GetRecipientNotification(
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

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});
