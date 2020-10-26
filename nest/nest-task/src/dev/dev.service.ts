import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import {AxiosResponse} from 'axios';
import { Observable } from 'rxjs';
import { User } from 'src/auth/user.entity';

@Injectable()
export class DevService {
  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private httpService: HttpService,
  ) {}

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

  findAll(): Observable<AxiosResponse<User[]>> {
    return this.httpService.get('http://localhost:3000/cats');
  }
}
