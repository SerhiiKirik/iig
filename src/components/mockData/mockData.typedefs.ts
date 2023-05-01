import { TaskOne } from '../Task1/TaskOne';
import { Task2 } from '../Task2/Task2';
import { TabType } from '../../types/typedefs';

export const TABS: TabType[] = [
  { id: 1, title: 'Task 1', Content: TaskOne },
  { id: 2, title: 'Task 2', Content: Task2 },
];
