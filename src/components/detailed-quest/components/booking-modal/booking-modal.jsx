import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { connect } from 'react-redux';
import { useRef, useState } from 'react';
import { getisBookingModalOpened } from '../../../../store/reducers/modal/selectors';
import { changeToggleModal } from '../../../../store/actions';
import { postOrder } from '../../../../store/actions-api';

const mapStateToProps = (state) => ({
  isBookingModalOpened: getisBookingModalOpened(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeToggleModal(isBookingModalOpened) {
    dispatch(changeToggleModal(isBookingModalOpened));
  },
  onSubmit(orderData) {
    dispatch(postOrder(orderData));
  },
});

const BookingModal = (props) => {
  const { onChangeToggleModal, onSubmit } = props;

  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const [number, setNumber] = useState('');

  let isLegalRef = useRef(false);

  const handlePeopleOnChange = (evt) => {
    setNumber(Number(evt.target.value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      peopleCount: number,
      isLegal: isLegalRef.current.checked,
    });
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          onClick={() => {
            onChangeToggleModal(false);
          }}
        >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          onSubmit={handleSubmit}
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              ref={nameRef}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              ref={phoneRef}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              onChange={handlePeopleOnChange}
              value={number}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              ref={isLegalRef}
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
