export enum PRIORITY {
  HIGH,
  MEDIUM,
  LOW,
}

export interface TodoItem {
  title: string;
  content: string;
  priority: PRIORITY;
  resolved: boolean;
}
