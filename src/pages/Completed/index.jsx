import { TaskDashboard } from '../../components';
import { TASK_STATUS } from '../../constants';

const Completed = () => (
  <TaskDashboard
    title="Completed tasks"
    subtitle="Everything you've finished."
    lockedStatus={TASK_STATUS.COMPLETED}
  />
);

export default Completed;
