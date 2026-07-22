import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Row, Typography, Button } from '../common';
import TaskSummary from '../TaskSummary';
import TaskCard from '../TaskCard';
import Modal from '../Modal';
import TaskForm from '../TaskForm';
import {
  addTask,
  updateTask,
  deleteTask,
  selectAllTasks,
} from '../../store/tasksSlice';
import {
  TASK_STATUS_OPTIONS,
  SORT_DIRECTION,
} from '../../constants';
import { sortByDueDate } from '../../helpers';
import './index.css';

const ALL_FILTER = 'ALL';

const TaskDashboard = ({ title, subtitle, lockedStatus = null }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);

  const [statusFilter, setStatusFilter] = useState(ALL_FILTER);
  const [sortDirection, setSortDirection] = useState(SORT_DIRECTION.ASC);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const visibleTasks = useMemo(() => {
    const activeStatus = lockedStatus ?? statusFilter;
    const filtered =
      activeStatus === ALL_FILTER
        ? tasks
        : tasks.filter((task) => task.status === activeStatus);
    return sortByDueDate(filtered, sortDirection);
  }, [tasks, lockedStatus, statusFilter, sortDirection]);

  const openAddModal = () => {
    setEditingTask(null);
    setModalOpen(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingTask(null);
  };

  const handleSubmit = (values) => {
    if (editingTask) {
      dispatch(updateTask({ id: editingTask.id, ...values }));
    } else {
      dispatch(addTask(values));
    }
    closeModal();
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const toggleSort = () =>
    setSortDirection((prev) =>
      prev === SORT_DIRECTION.ASC ? SORT_DIRECTION.DESC : SORT_DIRECTION.ASC,
    );

  return (
    <div className="dashboard">
      <Stack gap="24px">
        <Row justifyContent="space-between" alignItems="flex-start" gap="16px">
          <Stack gap="4px">
            <Typography variant="headline-lg">{title}</Typography>
            {subtitle && (
              <Typography variant="body-md" color="var(--color-on-surface-variant)">
                {subtitle}
              </Typography>
            )}
          </Stack>
          <Button variant="primary" onClick={openAddModal}>
            + Add task
          </Button>
        </Row>

        <TaskSummary />

        <Row justifyContent="space-between" alignItems="center" gap="12px" className="dashboard-toolbar">
          {lockedStatus ? (
            <Typography variant="label-md" color="var(--color-on-surface-variant)">
              {visibleTasks.length} task{visibleTasks.length === 1 ? '' : 's'}
            </Typography>
          ) : (
            <div className="dashboard-filter">
              <Typography as="label" variant="label-md" className="input-label" htmlFor="status-filter">
                Filter
              </Typography>
              <select
                id="status-filter"
                className="input-field dashboard-select"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value={ALL_FILTER}>All statuses</option>
                {TASK_STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          )}

          <Button variant="secondary" size="sm" onClick={toggleSort}>
            Due date {sortDirection === SORT_DIRECTION.ASC ? '↑' : '↓'}
          </Button>
        </Row>

        {visibleTasks.length === 0 ? (
          <div className="dashboard-empty">
            <Typography variant="body-lg" color="var(--color-on-surface-variant)">
              No tasks here yet.
            </Typography>
            <Button variant="secondary" onClick={openAddModal}>
              Create your first task
            </Button>
          </div>
        ) : (
          <div className="dashboard-grid">
            {visibleTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={openEditModal}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </Stack>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingTask ? 'Edit task' : 'Add task'}
      >
        <TaskForm
          initialValues={editingTask ?? undefined}
          onSubmit={handleSubmit}
          onCancel={closeModal}
          submitLabel={editingTask ? 'Save changes' : 'Add task'}
        />
      </Modal>
    </div>
  );
};

export default TaskDashboard;
