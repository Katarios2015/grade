const ActionType = {
  LOAD_QUESTS: `home/loadQuests`,
  LOAD_QUEST_CARD: `quest/loadQuestcard`,
};

const loadQuests = (cards) => ({
  type: ActionType.LOAD_QUESTS,
  payload: cards,
});

const loadQuestCard = (item) => ({
  type: ActionType.LOAD_QUEST_CARD,
  payload: item,
});

export { loadQuests, loadQuestCard, ActionType };
