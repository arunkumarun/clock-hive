import type {ClockHand, DigitClockHand} from "./DigitUtil.ts";

export const noneHand: ClockHand = {hour: 7.5, minute: 37.5};
export const neutralHand1: ClockHand = {hour: 7.5, minute: 7.5};
export const neutralHand2: ClockHand = {hour: 10.5, minute: 22.5};
export const neutralHand3: ClockHand = {hour: 13.5, minute: 37.5, shouldMod: false};
export const neutralHand4: ClockHand = {hour: 16.5, minute: 52.5, shouldMod: false};

export const digit3x2: DigitClockHand = {
  0: [
    [{hour: 3, minute: 30}, {hour: 9, minute: 30}],
    [{hour: 12, minute: 30}, {hour: 12, minute: 30}],
    [{hour: 3, minute: 0}, {hour: 9, minute: 0}],
  ],
  1: [
    [noneHand, {hour: 30, minute: 30}],
    [noneHand, {hour: 12, minute: 30}],
    [noneHand, {hour: 12, minute: 0}],
  ],
  2: [
    [{hour: 3, minute: 15}, {hour: 9, minute: 30}],
    [{hour: 6, minute: 15}, {hour: 12, minute: 45}],
    [{hour: 3, minute: 0}, {hour: 9, minute: 45}],
  ],
  3: [
    [{hour: 3, minute: 15}, {hour: 9, minute: 30}],
    [{hour: 3, minute: 15}, {hour: 12, minute: 45}],
    [{hour: 3, minute: 15}, {hour: 9, minute: 0}],
  ],
  4: [
    [{hour: 6, minute: 30}, {hour: 6, minute: 30}],
    [{hour: 12, minute: 15}, {hour: 12, minute: 30}],
    [noneHand, {hour: 12, minute: 0}],
  ],
  5: [
    [{hour: 3, minute: 30}, {hour: 9, minute: 45}],
    [{hour: 12, minute: 15}, {hour: 9, minute: 30}],
    [{hour: 3, minute: 15}, {hour: 9, minute: 0}],
  ],
  6: [
    [{hour: 3, minute: 30}, {hour: 9, minute: 45}],
    [{hour: 12, minute: 30}, {hour: 9, minute: 30}],
    [{hour: 3, minute: 0}, {hour: 9, minute: 0}],
  ],
  7: [
    [{hour: 3, minute: 15}, {hour: 9, minute: 30}],
    [noneHand, {hour: 12, minute: 30}],
    [noneHand, {hour: 12, minute: 0}],
  ],
  8: [
    [{hour: 3, minute: 30}, {hour: 9, minute: 30}],
    [{hour: 12, minute: 15}, {hour: 12, minute: 45}],
    [{hour: 3, minute: 0}, {hour: 9, minute: 0}],
  ],
  9: [
    [{hour: 3, minute: 30}, {hour: 9, minute: 30}],
    [{hour: 12, minute: 15}, {hour: 12, minute: 30}],
    [{hour: 3, minute: 15}, {hour: 9, minute: 0}],
  ],
  neutral1: [
    [neutralHand1, neutralHand1],
    [neutralHand1, neutralHand1],
    [neutralHand1, neutralHand1],
  ],
  neutral2: [
    [neutralHand2, neutralHand2],
    [neutralHand2, neutralHand2],
    [neutralHand2, neutralHand2],
  ],
  neutral3: [
    [neutralHand3, neutralHand3],
    [neutralHand3, neutralHand3],
    [neutralHand3, neutralHand3],
  ],
  neutral4: [
    [neutralHand4, neutralHand4],
    [neutralHand4, neutralHand4],
    [neutralHand4, neutralHand4],
  ],
}
