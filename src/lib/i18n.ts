export const translations = {
  en: {
    // Existing translations
    addAccount: "Add Account",
    search: "Search accounts...",
    export: "Export",
    bulkActions: "Bulk Actions",
    selectProject: "Select project",
    allProjects: "All Projects",
    selectStatus: "Select status",
    allStatuses: "All Statuses",
    account: "Account",
    project: "Project",
    status: "Status",
    timeSpent: "Time Spent",
    lastActive: "Last Active",
    posts: "Posts",
    followers: "Followers",
    addNewAccount: "Add New Account",
    selectProxy: "Select Proxy",
    uploadFiles: "Upload Files",
    dragAndDrop: "or drag and drop",
    cancel: "Cancel",
    create: "Create",

    // Menu items
    menu: "Menu",
    accounts: "Accounts",
    tasks: "Tasks",
    audiences: "Audiences",
    parsing: "Parsing",
    affiliate: "Affiliate",
    statistics: "Statistics",
    settings: "Settings",

    // Dashboard
    dashboard: "Dashboard",
    manageAccounts: "Manage your Telegram accounts and view statistics",
    totalAccounts: "Total Accounts",
    activeTime: "Active Time",
    totalPosts: "Total Posts",
    activeUsers: "Active Users",

    // Tasks section
    taskName: "Task Name",
    taskStatus: "Status",
    dueDate: "Due Date",
    assignee: "Assignee",
    priority: "Priority",
    addTask: "Add Task",
    searchTasks: "Search tasks...",

    // Audiences section
    audienceName: "Audience Name",
    memberCount: "Member Count",
    lastUpdated: "Last Updated",
    addAudience: "Add Audience",
    searchAudiences: "Search audiences...",

    // Parsing section
    sourceName: "Source Name",
    parseStatus: "Parse Status",
    lastParsed: "Last Parsed",
    addSource: "Add Source",
    searchSources: "Search sources...",

    // Affiliate section
    partnerName: "Partner Name",
    referrals: "Referrals",
    earnings: "Earnings",
    addPartner: "Add Partner",
    searchPartners: "Search partners...",
    referralLink: "Referral Link",
    copyLink: "Copy Link",
  },
  ru: {
    // Existing translations
    addAccount: "Добавить аккаунт",
    search: "Поиск аккаунтов...",
    export: "Экспорт",
    bulkActions: "Массовые действия",
    selectProject: "Выберите проект",
    allProjects: "Все проекты",
    selectStatus: "Выберите статус",
    allStatuses: "Все статусы",
    account: "Аккаунт",
    project: "Проект",
    status: "Статус",
    timeSpent: "Затраченное время",
    lastActive: "Последняя активность",
    posts: "Посты",
    followers: "Подписчики",
    addNewAccount: "Добавить новый аккаунт",
    selectProxy: "Выберите прокси",
    uploadFiles: "Загрузить файлы",
    dragAndDrop: "или перетащите",
    cancel: "Отмена",
    create: "Создать",

    // Menu items
    menu: "Меню",
    accounts: "Аккаунты",
    tasks: "Задачи",
    audiences: "Аудитории",
    parsing: "Парсинг",
    affiliate: "Партнерка",
    statistics: "Статистика",
    settings: "Настройки",

    // Dashboard
    dashboard: "Панель управления",
    manageAccounts: "Управляйте аккаунтами Telegram и просматривайте статистику",
    totalAccounts: "Всего аккаунтов",
    activeTime: "Активное время",
    totalPosts: "Всего постов",
    activeUsers: "Активные пользователи",

    // Tasks section
    taskName: "Название задачи",
    taskStatus: "Статус",
    dueDate: "Срок",
    assignee: "Исполнитель",
    priority: "Приоритет",
    addTask: "Добавить задачу",
    searchTasks: "Поиск задач...",

    // Audiences section
    audienceName: "Название аудитории",
    memberCount: "Количество участников",
    lastUpdated: "Последнее обновление",
    addAudience: "Добавить аудиторию",
    searchAudiences: "Поиск аудиторий...",

    // Parsing section
    sourceName: "Название источника",
    parseStatus: "Статус парсинга",
    lastParsed: "Последний парсинг",
    addSource: "Добавить источник",
    searchSources: "Поиск источников...",

    // Affiliate section
    partnerName: "Имя партнера",
    referrals: "Рефералы",
    earnings: "Заработок",
    addPartner: "Добавить партнера",
    searchPartners: "Поиск партнеров...",
    referralLink: "Реферальная ссылка",
    copyLink: "Копировать ссылку",
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
