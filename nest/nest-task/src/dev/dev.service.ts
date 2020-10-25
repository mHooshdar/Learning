import { Injectable, Logger } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class DevService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  private readonly logger = new Logger(DevService.name);

  // called at 23:59:59 each day!
  @Cron('59 59 23 * * *', {
    name: 'telegramNotification',
  })
  handleCron() {
    this.logger.debug('Called at 23:59:59 each day!');
    // const job = this.schedulerRegistry.getCronJob('notifications');
    // job.stop();
  }
}
