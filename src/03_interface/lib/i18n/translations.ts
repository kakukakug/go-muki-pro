type TextDefinition = {
  drawer: {
    policy: string;
    reviewRequest: string;
    licenses: string;
  };
  placeholder: string;
};

type Translations = {
  en: TextDefinition;
  ja: TextDefinition;
};

export const translations: Translations = {
  en: {
    drawer: {
      policy: "privacy policy",
      reviewRequest: "Please cooperate with the review",
      licenses: "licenses",
    },
    placeholder:
      "Enter it and tap the button below to enlarge it on the screen.",
  },
  ja: {
    drawer: {
      policy: "プライバシーポリシー",
      reviewRequest: "レビューにご協力ください",
      licenses: "ライセンス",
    },
    placeholder: "入力して下のボタンをタップすると、画面に大きく表示できます。",
  },
};
