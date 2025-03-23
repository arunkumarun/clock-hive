import {digit3x2} from "./Digit3x2.ts";

export interface ClockHand {
  hour: number;
  minute: number;
}

export interface DigitClockHand {
  0: ClockHand[][];
  1: ClockHand[][];
  2: ClockHand[][];
  3: ClockHand[][];
  4: ClockHand[][];
  5: ClockHand[][];
  6: ClockHand[][];
  7: ClockHand[][];
  8: ClockHand[][];
  9: ClockHand[][];
}

export type DigitKey = keyof DigitClockHand;

export type DigitClockHandMap = Record<number, Record<number, DigitClockHand>>;


export const digitClockHandMap: DigitClockHandMap = {
  3: {
    2: {
      ...digit3x2,
    }
  }
};
