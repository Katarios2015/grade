import { Level, Type, ALL_QUESTS } from './const';

const getTranslateLevel = (level) => {
  switch (level) {
    case Level.HARD: {
      const hard = 'сложный';
      return hard;
    }

    case Level.MEDIUM: {
      const medium = 'средний';
      return medium;
    }
    case Level.EASY: {
      const easy = 'простой';
      return easy;
    }

    default:
      return level;
  }
};

const getTranslateQuestType = (type) => {
  switch (type) {
    case Type.Adventures: {
      const adventures = 'Приключения';
      return adventures;
    }

    case Type.Detective: {
      const detective = 'Детектив';
      return detective;
    }
    case Type.Horror: {
      const horror = 'Ужасы';
      return horror;
    }

    case Type.Mystic: {
      const mystic = 'Мистика';
      return mystic;
    }

    case Type.SciFi: {
      const sciFi = 'Sci-fi';
      return sciFi;
    }

    default:
      return type;
  }
};

const getStringByArray = (arr) => {
  const intervalString = arr.join('-');
  return intervalString;
};

const getFiltredQuests = (filterName, cards) => {
  if (filterName !== ALL_QUESTS) {
    const filtredByTypeCards = cards.filter(
      (card) => getTranslateQuestType(card.type) === filterName,
    );
    return filtredByTypeCards;
  } else {
    return cards;
  }
};

export {
  getTranslateLevel,
  getTranslateQuestType,
  getStringByArray,
  getFiltredQuests,
};
