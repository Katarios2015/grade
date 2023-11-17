import React from 'react';
import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { getActiveLink } from '../../../store/reducers/active-link/selectors';
import { addActiveLink } from '../../../store/actions';
import {TITLES, TitlesAndLinksMap} from './utils/consts';

const mapStateToProps = (state) => ({
  activeLink: getActiveLink(state),
});

const mapDispatchToProps = (dispatch) => ({
  onActiveLink(title) {
    dispatch(addActiveLink(title));
  },
});

const Header = (props) => {
  const { activeLink, onActiveLink } = props;

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image
            src={logo}
            alt="Логотип Escape Room"
            width="134"
            height="50"
          />
        </S.Logo>
        <S.Navigation>
          <S.Links>
            {TITLES.map((title) => {
              return (
                <S.LinkItem key={nanoid()}>
                  {title === activeLink ? (
                    <S.Link
                      $isActiveLink
                      onClick={() => {
                        onActiveLink(title);
                      }}
                      to={TitlesAndLinksMap.get(title)}
                    >
                      {title}
                    </S.Link>
                  ) : (
                    <S.Link
                      onClick={() => {
                        onActiveLink(title);
                      }}
                      to={TitlesAndLinksMap.get(title)}
                    >
                      {title}
                    </S.Link>
                  )}
                </S.LinkItem>
              );
            })}
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
