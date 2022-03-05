import { Platform } from "react-native";
import * as FirebaseAnalytics from "expo-firebase-analytics";

import {
  IAnalyticsRepository,
  EventType,
} from "../../../02_usecase/repository/analytics";

const defaultTrackClassName = () => {
  switch (Platform.OS) {
    case "ios": {
      return "UIViewController";
    }
    case "android": {
      return "MainActivity";
    }
    default: {
      return null;
    }
  }
};

export class AnalyticsRepository implements IAnalyticsRepository {
  // eslint-disable-next-line class-methods-use-this
  public async setUserId(userId: string) {
    await FirebaseAnalytics.setUserId(userId);
  }

  // eslint-disable-next-line class-methods-use-this
  public async setUserProperty(key: string, value: string) {
    if (__DEV__) {
      //
      // NOTE: 制限がある
      // https://www.hatarakumama-pj.com/posts/ginzaitlab6912241/
      //
      // ・1~24文字の英数字、アンダースコア
      // ・ドキュメントに記載はないですが、日本語も可能(日本語でも24文字までOK)
      // ・1文字は必ずアルファベットである必要があります。(数字やアンダースコアで始まる値を設定することはできません。)
      // ・ただし、日本語の場合は、1文字目はアルファベットでなくても設定可能です。
      // ・自動的に収集されるユーザープロパティと同じプロパティ名は設定できません。
      //
      if (key.length === 0 || key.length > 24) {
        // eslint-disable-next-line no-console
        console.error(
          `GAのUserPropertyは1~24文字である必要があります。 ${key}`
        );
      }

      if (key.includes("-")) {
        // eslint-disable-next-line no-console
        console.error(`GAのUserPropertyはハイフンは使えません。 ${key}`);
      }
    }

    await FirebaseAnalytics.setUserProperty(key, value);
  }

  // eslint-disable-next-line class-methods-use-this
  public async logEvent(event: EventType, params?: {}) {
    await FirebaseAnalytics.logEvent(event, params);
  }

  // eslint-disable-next-line class-methods-use-this
  public async trackScreenView(screen: string) {
    await FirebaseAnalytics.setCurrentScreen(
      screen,
      defaultTrackClassName() || screen
    );
  }
}
