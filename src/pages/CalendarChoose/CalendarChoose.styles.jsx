import { styled } from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;

  padding: 1rem;

  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarBox = styled.div`
  border: 1px solid #a5ce55;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  font-size: 0.825rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  padding-top: 1rem;
  padding-bottom: 2rem;

  font-size: 1.25rem;
`;

const TitleDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-weight: 600;
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1.25rem;
  padding-bottom: 1.25rem;
  grid-column-start: ${({ date, startdate }) =>
    date === 0 ? startdate : 'auto'};
  font-weight: 600;
  font-size: 1.25rem;
`;

const DateInfo = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &.today {
    color: #fff;
    background-color: #a5ce55;
    border-radius: 50%;
  }
`;

const DayBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-bottom: 1rem;
`;

export {
  Container,
  CalendarBox,
  Title,
  TitleDate,
  Calendar,
  Date,
  DateInfo,
  DayBox,
};
