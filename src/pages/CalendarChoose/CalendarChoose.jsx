import Header from 'components/Header/Header';
import * as S from './CalendarChoose.styles';
import { RxDotFilled } from 'react-icons/rx';

const getDayKorean = (day) =>
  ['일', '월', '화', '수', '목', '금', '토'].at(day);

const CalendarChoose = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const totalDate = new Date(year, month, 0).getDate();
  const startDate = new Date(year, month - 1, 1).getDay() + 1;

  return (
    <>
      <Header>원하는 날짜를 선택해주세요!</Header>
      <S.Container>
        <S.CalendarBox>
          <S.Title>
            <span>{year}년</span>
            <span>{month}월</span>
          </S.Title>
          <S.DayBox>
            {Array.from(Array(7).keys()).map((day) => (
              <S.Date key={day} day={day}>
                {getDayKorean(day)}
              </S.Date>
            ))}
          </S.DayBox>
          <S.Calendar>
            {Array.from(Array(totalDate).keys()).map((i) => (
              <S.Date
                className={i === 0 ? 'today' : null}
                key={`${i}-day`}
                date={i}
                startdate={startDate}
              >
                <S.DateInfo date={i} startDate={startDate}>
                  {i + 1}
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
