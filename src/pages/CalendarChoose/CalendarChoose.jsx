import { useState, useEffect } from 'react';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import * as S from './CalendarChoose.styles';

import Header from 'components/Header/Header';
import { DAY_KOREAN } from 'constants/date';
import { dateToString, getMonday } from 'utils/date';

const CalendarChoose = () => {
  const [selectedDay, setSelectedDate] = useState(-1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [totalDate, setTotalDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
  );
  const [startDate, setStartDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() + 1,
  );

  const navigate = useNavigate();

  useEffect(() => {
    setTotalDate(new Date(currentYear, currentMonth, 0).getDate());
    setStartDate(new Date(currentYear, currentMonth - 1, 1).getDay() + 1);
  }, [currentYear, currentMonth]);

  const changeDate = (mode) => () => {
    switch (mode) {
      case 'next':
        if (currentMonth === 12) {
          setCurrentMonth(1);
          setCurrentYear(currentYear + 1);

          return;
        }
        setCurrentMonth(currentMonth + 1);
        return;
      case 'prev':
        if (currentMonth === 1) {
          setCurrentMonth(12);
          setCurrentYear(currentYear - 1);

          return;
        }
        setCurrentMonth(currentMonth - 1);
        return;
      default:
        return;
    }
  };

  const selectDate = (day) => () => {
    setSelectedDate(day - 1);
    navigate(
      `/calendar?date=${dateToString(
        getMonday(new Date(currentYear, currentMonth - 1, day)),
      )}`,
    );
  };
  return (
    <>
      <Header>원하는 날짜를 선택해주세요!</Header>
      <S.Container>
        <S.CalendarBox>
          <S.Title>
            <AiOutlineLeft onClick={changeDate('prev')} />
            <S.TitleDate>
              <span>{currentYear}년</span>
              <span>{currentMonth}월</span>
            </S.TitleDate>
            <AiOutlineRight onClick={changeDate('next')} />
          </S.Title>
          <S.DayBox>
            {Array.from(Array(7).keys()).map((day) => (
              <S.Date key={day} day={day}>
                {DAY_KOREAN[day]}
              </S.Date>
            ))}
          </S.DayBox>
          <S.Calendar>
            {Array.from(Array(totalDate).keys()).map((i) => (
              <S.Date key={`${i}-day`} date={i} startdate={startDate}>
                <S.DateInfo
                  className={i === selectedDay ? 'today' : null}
                  date={i}
                  startdate={startDate}
                  onClick={selectDate(i + 1)}
                >
                  <span>{i + 1}</span>
                </S.DateInfo>
              </S.Date>
            ))}
          </S.Calendar>
        </S.CalendarBox>
      </S.Container>
    </>
  );
};

export default CalendarChoose;
