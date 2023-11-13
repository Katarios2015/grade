import {Level} from "./const";

const getTranslateLevel = (level) => {
  switch (level) {
    case Level.HARD: {
      const hard = "сложный";
      return hard;
    };

    case Level.MEDIUM: {
      const medium = "средний";
      return medium;
    };
    case Level.EASY: {
      const easy = "простой";
      return easy;
    };

    default: return level;
  }
};

export {getTranslateLevel};
