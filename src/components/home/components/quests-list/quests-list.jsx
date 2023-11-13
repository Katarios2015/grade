import * as S from '../quests-catalog/quests-catalog.styled';
import { CardQuest } from '../quest-card/quest-card';

const QuestsList = (props) => {
  const { cards } = props;
  return (
    <S.QuestsList>
      {cards.map((card) => {
        return <CardQuest item={card} key={card.id} />;
      })}
    </S.QuestsList>
  );
};

export { QuestsList };
