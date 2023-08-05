import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxDotFilled } from 'react-icons/rx';

import * as S from './MainCalendar.style';

import morning from 'assets/MainMorningIcon.svg';
import lunch from 'assets/MainLunchIcon.svg';
import dinner from 'assets/MainNightIcon.svg';
import { getRecipeByCalendar } from 'apis/request/recipe';
import { DAY_KOREAN } from 'constants/date';
import { dateToString, getMonday } from 'utils/date';
import { convertMainCalendarData } from 'utils/recipe';

const MainCalendar = () => {
  const [calendarRecipe, setCalendarRecipe] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getRecipeByCalendar(dateToString(getMonday(new Date()))).then((res) => {
      setCalendarRecipe(convertMainCalendarData(res.data.result));
    });
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
        {Array(3)
          .fill()
          .map((_, idx_row) => (
            <tr key={`${idx_row}-box`}>
              {Array(8)
                .fill()
                .map((_, idx_col) => (
                  <S.Data key={`${idx_col}-morning`}>
                    {idx_col === 0 ? (
                      idx_row === 0 ? (
                        <img src={morning} alt="아침로고" />
                      ) : idx_row === 1 ? (
                        <img src={lunch} alt="점심로고" />
                      ) : (
                        <img src={dinner} alt="저녁로고" />
                      )
                    ) : calendarRecipe[idx_row + 1]?.includes(idx_col) ? (
                      <RxDotFilled />
                    ) : null}
                  </S.Data>
                ))}
            </tr>
          ))}
      </tbody>
    </S.Container>
  );
};

export default MainCalendar;
