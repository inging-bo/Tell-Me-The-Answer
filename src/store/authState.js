import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: null, // 초기값은 null (로그아웃 상태)
});