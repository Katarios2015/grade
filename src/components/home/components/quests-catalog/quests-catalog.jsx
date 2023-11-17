import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { QuestsList } from '../quests-list/quests-list';
import { nanoid } from 'nanoid';
import { FILTER_TYPES } from '../utils/const';

import {
  getCards,
  getDataLoaded,
} from '../../../../store/reducers/quests-data/selectors';

import { getFilter } from '../../../../store/reducers/filter/selectors';
import { getFilteredCards } from '../../../../store/reducers/filtred-quests/selectors';

import { fetchCards } from '../../../../store/actions-api';
import { addFilter } from '../../../../store/actions';
import { filtering } from '../../../../store/actions';

const mapStateToProps = (state) => ({
  cards: getCards(state),
  isDataLoaded: getDataLoaded(state),
  filterType: getFilter(state),
  filteredCards: getFilteredCards(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchCards());
  },
  onFilter(filterType) {
    dispatch(addFilter(filterType));
  },
  onFilterCards(filterType, cards) {
    dispatch(filtering(filterType, cards));
  },
});

const QuestsCatalog = (props) => {
  const {
    cards,
    filterType,
    filteredCards,
    onFilter,
    onFilterCards,
    onLoadData,
    isDataLoaded,
  } = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  });

  useEffect(() => {
    onFilterCards(filterType, cards);
  }, [filterType, cards, onFilterCards]);

  const IconsAndFiltersMap = new Map([
    ['Все квесты', <IconAllQuests />],
    ['Приключения', <IconAdventures />],
    ['Ужасы', <IconHorrors />],
    ['Мистика', <IconMystic />],
    ['Детектив', <IconDetective />],
    ['Sci-fi', <IconScifi />],
  ]);

  return (
    <>
      <S.Tabs>
        {FILTER_TYPES.map((filterName) => {
          return (
            <S.TabItem key={nanoid()}>
              {filterName === filterType ? (
                <S.TabBtn
                  isActive
                  onClick={() => {
                    onFilter(filterName);
                  }}
                >
                  {IconsAndFiltersMap.get(filterName)}
                  <S.TabTitle>{filterName}</S.TabTitle>
                </S.TabBtn>
              ) : (
                <S.TabBtn
                  onClick={() => {
                    onFilter(filterName);
                  }}
                >
                  {IconsAndFiltersMap.get(filterName)}
                  <S.TabTitle>{filterName}</S.TabTitle>
                </S.TabBtn>
              )}
            </S.TabItem>
          );
        })}
      </S.Tabs>
      <QuestsList cards={filteredCards} />
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(QuestsCatalog));
