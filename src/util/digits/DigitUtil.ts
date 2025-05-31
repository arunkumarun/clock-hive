import {digit3x2} from "./Digit3x2.ts";
import {digit6x3} from "./Digit6x3.ts";

export interface ClockProp {
  hour: number;
  minute: number;
  duration?: number;
  delay?: number;
  shouldMod?: boolean;
}

export interface DigitClockHand {
  0: ClockProp[][];
  1: ClockProp[][];
  2: ClockProp[][];
  3: ClockProp[][];
  4: ClockProp[][];
  5: ClockProp[][];
  6: ClockProp[][];
  7: ClockProp[][];
  8: ClockProp[][];
  9: ClockProp[][];
  "neutral1": ClockProp[][];
  "neutral2": ClockProp[][];
  "neutral3": ClockProp[][];
  "neutral4": ClockProp[][];
}

export type DigitKey = keyof DigitClockHand;

export type DigitClockHandMap = Record<number, Record<number, DigitClockHand>>;


export const digitClockHandMap: DigitClockHandMap = {
  3: {
    2: {
      ...digit3x2,
    }
  },
  6: {
    3: {
      ...digit6x3,
    }
  }
};
