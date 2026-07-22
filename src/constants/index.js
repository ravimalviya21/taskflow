export const ROUTES = Object.freeze({
    ALL_TASK: { label: "All tasks", path: "/" },
    COMPLETED: { label: "Completed", path: "/completed" },
    PENDING: { label: "Pending", path: "/pending" },
});

export const ROUTE_OPTIONS = Object.values(ROUTES);

export const TASK_STATUS = Object.freeze({
    PENDING: "Pending",
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
});

export const TASK_STATUS_OPTIONS = Object.values(TASK_STATUS);

export const STATUS_MODIFIER = Object.freeze({
    [TASK_STATUS.PENDING]: "pending",
    [TASK_STATUS.IN_PROGRESS]: "in-progress",
    [TASK_STATUS.COMPLETED]: "completed",
});

export const SORT_DIRECTION = Object.freeze({
    ASC: "asc",
    DESC: "desc",
});

export const TASKS_STORAGE_KEY = "taskflow.tasks";
