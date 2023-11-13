import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
//import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
//import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
//import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { QuestsList } from '../quests-list/quests-list';

import {
  getCards,
  getDataLoaded,
} from '../../../../store/reducers/quests-data/selectors';

import { fetchCards } from '../../../../store/actions-api';

const mapStateToProps = (state) => ({
  cards: getCards(state),
  isDataLoaded: getDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchCards());
  },
});


const QuestsCatalog = (props) => {
  const { cards, onLoadData, isDataLoaded } = props;
console.log(isDataLoaded);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  });

  return (
    <>
      <S.Tabs>
        <S.TabItem>
          <S.TabBtn isActive>
            <IconAllQuests />
            <S.TabTitle>Все квесты</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn>
            <IconAdventures />
            <S.TabTitle>Приключения</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn>
            <IconHorrors />
            <S.TabTitle>Ужасы</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn>
            <IconMystic />
            <S.TabTitle>Мистика</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn>
            <IconDetective />
            <S.TabTitle>Детектив</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn>
            <IconScifi />
            <S.TabTitle>Sci-fi</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>
      <QuestsList cards={cards} />
    </>
  );
};

/*QuestsCatalog.propTypes = {
  offers: PropTypes.arrayOf(object).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};*/


export default connect(mapStateToProps, mapDispatchToProps)(QuestsCatalog);
