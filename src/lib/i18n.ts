export type Language = "en" | "ru";

export type TranslationKey =
  | "dashboard"
  | "manageAccounts"
  | "audiences"
  | "manageAudiences"
  | "parsing"
  | "manageParsing"
  | "affiliate"
  | "manageAffiliate"
  | "statistics"
  | "viewStatistics"
  | "settings"
  | "manageSettings";

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    dashboard: "Dashboard",
    manageAccounts: "Manage your Telegram accounts",
    audiences: "Audiences",
    manageAudiences: "Manage your audiences",
    parsing: "Parsing",
    manageParsing: "Manage parsing tasks",
    affiliate: "Affiliate Program",
    manageAffiliate: "Manage affiliate program",
    statistics: "Statistics",
    viewStatistics: "View your statistics",
    settings: "Settings",
    manageSettings: "Manage your settings"
  },
  ru: {
    dashboard: "Панель управления",
    manageAccounts: "Управление аккаунтами Telegram",
    audiences: "Аудитории",
    manageAudiences: "Управление аудиториями",
    parsing: "Парсинг",
    manageParsing: "Управление задачами парсинга",
    affiliate: "Партнерская программа",
    manageAffiliate: "Управление партнерской программой",
    statistics: "Статистика",
    viewStatistics: "Просмотр статистики",
    settings: "Настройки",
    manageSettings: "Управление настройками"
  }
};