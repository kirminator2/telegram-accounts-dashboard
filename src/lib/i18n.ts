export type Language = "en" | "ru";

export type TranslationKey =
  | "menu"
  | "accounts"
  | "tasks"
  | "audiences"
  | "parsing"
  | "affiliate"
  | "statistics"
  | "settings"
  | "dashboard"
  | "manageAccounts"
  | "manageAudiences"
  | "manageParsing"
  | "manageAffiliate"
  | "viewStatistics"
  | "manageSettings"
  | "addAccount"
  | "addNewAccount"
  | "selectProject"
  | "selectProxy"
  | "uploadFiles"
  | "dragAndDrop"
  | "cancel"
  | "create"
  | "totalAccounts"
  | "activeTime"
  | "totalPosts"
  | "activeUsers"
  | "searchTasks"
  | "addTask"
  | "taskName"
  | "taskStatus"
  | "dueDate"
  | "assignee"
  | "priority"
  | "search"
  | "filter"
  | "export"
  | "bulkActions"
  | "project"
  | "status"
  | "timeSpent"
  | "lastActive"
  | "posts"
  | "followers"
  | "actions";

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    menu: "Menu",
    accounts: "Accounts",
    tasks: "Tasks",
    audiences: "Audiences",
    parsing: "Parsing",
    affiliate: "Affiliate",
    statistics: "Statistics",
    settings: "Settings",
    dashboard: "Dashboard",
    manageAccounts: "Manage your Telegram accounts",
    manageAudiences: "Manage your audiences",
    manageParsing: "Manage parsing tasks",
    manageAffiliate: "Manage affiliate program",
    viewStatistics: "View your statistics",
    manageSettings: "Manage your settings",
    addAccount: "Add Account",
    addNewAccount: "Add New Account",
    selectProject: "Select Project",
    selectProxy: "Select Proxy",
    uploadFiles: "Upload Files",
    dragAndDrop: "Drag and drop files here",
    cancel: "Cancel",
    create: "Create",
    totalAccounts: "Total Accounts",
    activeTime: "Active Time",
    totalPosts: "Total Posts",
    activeUsers: "Active Users",
    searchTasks: "Search tasks...",
    addTask: "Add Task",
    taskName: "Task Name",
    taskStatus: "Status",
    dueDate: "Due Date",
    assignee: "Assignee",
    priority: "Priority",
    search: "Search",
    filter: "Filter",
    export: "Export",
    bulkActions: "Bulk Actions",
    project: "Project",
    status: "Status",
    timeSpent: "Time Spent",
    lastActive: "Last Active",
    posts: "Posts",
    followers: "Followers",
    actions: "Actions"
  },
  ru: {
    menu: "Меню",
    accounts: "Аккаунты",
    tasks: "Задачи",
    audiences: "Аудитории",
    parsing: "Парсинг",
    affiliate: "Партнерка",
    statistics: "Статистика",
    settings: "Настройки",
    dashboard: "Панель управления",
    manageAccounts: "Управление аккаунтами Telegram",
    manageAudiences: "Управление аудиториями",
    manageParsing: "Управление задачами парсинга",
    manageAffiliate: "Управление партнерской программой",
    viewStatistics: "Просмотр статистики",
    manageSettings: "Управление настройками",
    addAccount: "Добавить аккаунт",
    addNewAccount: "Добавить новый аккаунт",
    selectProject: "Выберите проект",
    selectProxy: "Выберите прокси",
    uploadFiles: "Загрузить файлы",
    dragAndDrop: "Перетащите файлы сюда",
    cancel: "Отмена",
    create: "Создать",
    totalAccounts: "Всего аккаунтов",
    activeTime: "Активное время",
    totalPosts: "Всего постов",
    activeUsers: "Активные пользователи",
    searchTasks: "Поиск задач...",
    addTask: "Добавить задачу",
    taskName: "Название задачи",
    taskStatus: "Статус",
    dueDate: "Срок",
    assignee: "Исполнитель",
    priority: "Приоритет",
    search: "Поиск",
    filter: "Фильтр",
    export: "Экспорт",
    bulkActions: "Массовые действия",
    project: "Проект",
    status: "Статус",
    timeSpent: "Затраченное время",
    lastActive: "Последняя активность",
    posts: "Посты",
    followers: "Подписчики",
    actions: "Действия"
  }
};