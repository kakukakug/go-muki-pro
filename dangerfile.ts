// eslint-disable-next-line import/no-extraneous-dependencies
import { message, danger, warn } from "danger";

const entityDir = danger.git.fileMatch("src/1_entity/**");
const usecaseDir = danger.git.fileMatch("src/2_usecase/**");
const interfaceDir = danger.git.fileMatch("src/3_interface/**");
const testsDir = danger.git.fileMatch("__tests__/**");

const dangerFile = danger.git.fileMatch("dangerfile.ts");
const diffSize = Math.max(
  danger.github.pr.additions,
  danger.github.pr.deletions
);

if (entityDir.modified && !testsDir.modified) {
  warn("src/01_entity に変更があります。テストの追加を推奨します");
}

if (usecaseDir.modified && !testsDir.modified) {
  warn("src/02_usecaseに変更があります。テストの追加を推奨します");
}

if (interfaceDir.modified && !testsDir.modified) {
  warn("src/03_interfaceに変更があります。テストの追加を推奨します");
}

if (diffSize > 100) {
  warn("100行以上の変更があります。PRの分割を検討してください。");
}

if (danger.github.pr.changed_files > 10) {
  warn("10ファイル以上の変更があります。PRの分割を検討してください。");
}

if (dangerFile.modified) {
  message("dangerfileが進化しています！");
}
