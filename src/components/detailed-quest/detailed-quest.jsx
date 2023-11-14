import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';

import { useParams } from 'react-router-dom';

import {
  getCard,
  getCardDataLoaded,
} from '../../store/reducers/quest-card-data/selectors';

import { getUrlId } from '../../store/reducers/url-id/selectors';
import { fetchQuest } from '../../store/actions-api';
import { getCardUrlId } from '../../store/actions';

const mapStateToProps = (state) => ({
  card: getCard(state),
  isCardDataLoaded: getCardDataLoaded(state),
  urlId: getUrlId(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadCardData() {
    dispatch(fetchQuest());
  },
  cardId(urlId) {
    dispatch(getCardUrlId(urlId));
  },
});

const DetailedQuest = (props) => {
  const { card, isCardDataLoaded, onLoadCardData, cardId } = props;

  const {
    title,
    description,
    coverImg,
    level,
    peopleCount,
    duration,
    type,
  } = card;

  const urlParams = useParams();
  const urlId = Number(urlParams.id);

  useEffect(() => {
    cardId(urlId);
  }, []);

  useEffect(() => {
    if (!isCardDataLoaded) {
      onLoadCardData();
    }
  }, [isCardDataLoaded]);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
        src={coverImg}
        alt={title}
        width="1366"
        height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{type}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{peopleCount} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{level}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedQuest);
