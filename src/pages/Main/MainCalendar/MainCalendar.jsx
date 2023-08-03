import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxDotFilled } from 'react-icons/rx';

import * as S from './MainCalendar.style';

import morning from 'assets/MainMorningIcon.svg';
import lunch from 'assets/MainLunchIcon.svg';
import dinner from 'assets/MainNightIcon.svg';
import { getRecipeByCalendar } from 'apis/request/recipe';
import { DAY_KOREAN } from 'constants/date';
import { dateToString, getMonday } from 'utils/date';

const MainCalendar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getRecipeByCalendar(dateToString(getMonday(new Date()))).then((res) =>
      console.log(res),
    );
  }, []);
  const moveToCalendar = () => {
    navigate('/calendar');
  };
  return (
    <S.Container onClick={moveToCalendar}>
      <thead>
        <tr>
          {Array(8)
            .fill()
            .map((_, idx) => (
              <S.Day key={idx}>{idx !== 0 ? DAY_KOREAN[idx % 7] : ''}</S.Day>
            ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Array(8)
            .fill()
            .map((_, idx) => (
              <S.Data key={`${idx}-morning`}>
                {idx === 0 ? (
                  <img src={morning} alt="아침로고" />
                ) : (
                  <RxDotFilled />
                )}
              </S.Data>
            ))}
        </tr>
        <tr>
          {Array(8)
            .fill()
            .map((_, idx) => (
              <S.Data key={`${idx}-lunch`}>
                {idx === 0 ? (
                  <img src={lunch} alt="아침로고" />
                ) : (
                  <RxDotFilled />
                )}
              </S.Data>
            ))}
        </tr>
        <tr>
          {Array(8)
            .fill()
            .map((_, idx) => (
              <S.Data key={`${idx}-dinner`}>
                {idx === 0 ? (
                  <img src={dinner} alt="아침로고" />
                ) : (
                  <RxDotFilled />
                )}
              </S.Data>
            ))}
        </tr>
      </tbody>
    </S.Container>
  );
};

export default MainCalendar;
