export const Event = {
  // ナビゲーション
  execSearch: "execSearch",
  tapFavo: "tapFavo",
} as const;

export type EventType = typeof Event[keyof typeof Event];

export type IAnalyticsRepository = {
  setUserId: (userId: string) => Promise<void>;
  setUserProperty: (key: string, value: string) => Promise<void>;
  logEvent: (event: EventType, params?: {}) => Promise<void>;
  trackScreenView: (screen: string) => Promise<void>;
};
