export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'IN_PROGRESS'
}