import { TaskDashboard } from '../../components';
import { TASK_STATUS } from '../../constants';

const Pending = () => (
  <TaskDashboard
    title="Pending tasks"
    subtitle="Tasks waiting to be started."
    lockedStatus={TASK_STATUS.PENDING}
  />
);

export default Pending;
