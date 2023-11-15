//import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import {
  getTranslateLevel,
  getTranslateQuestType,
} from '../home/components/utils/utils';
import { useParams } from 'react-router-dom';

import { getCard } from '../../store/reducers/quest-card-data/selectors';

import { getUrlId } from '../../store/reducers/url-id/selectors';
import { fetchQuest } from '../../store/actions-api';
import { getCardUrlId } from '../../store/actions';
import { getisBookingModalOpened } from '../../store/reducers/modal/selectors';
import { changeToggleModal } from '../../store/actions';

const mapStateToProps = (state) => ({
  card: getCard(state),
  urlId: getUrlId(state),
  isBookingModalOpened: getisBookingModalOpened(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadCardData() {
    dispatch(fetchQuest());
  },
  cardId(urlId) {
    dispatch(getCardUrlId(urlId));
  },
  onChangeToggleModal(isBookingModalOpened) {
    dispatch(changeToggleModal(isBookingModalOpened));
  },
});

const DetailedQuest = (props) => {
  const {
    card,
    cardId,
    isBookingModalOpened,
    onLoadCardData,
    onChangeToggleModal,
  } = props;

  const { title, description, coverImg, level, peopleCount, duration, type } =
    card;

  const urlParams = useParams();
  const urlId = Number(urlParams.id);

  useEffect(() => {
    cardId(urlId);
  }, []);

  useEffect(() => {
    onLoadCardData();
  }, [urlId]);

  /*const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };*/

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage src={coverImg} alt={title} width="1366" height="768" />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{getTranslateQuestType(type)}</S.PageSubtitle>
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
                <S.FeatureTitle>{getTranslateLevel(level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn
              onClick={() => {
                onChangeToggleModal(true);
              }}
            >
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
