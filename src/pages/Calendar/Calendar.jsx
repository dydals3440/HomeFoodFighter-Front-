import { useState } from 'react';
import { AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai';

import morning from 'assets/MainMorningIcon.svg';
import lunch from 'assets/MainLunchIcon.svg';
import dinner from 'assets/MainNightIcon.svg';
import Header from 'components/Header/Header';

import * as S from './Calendar.styles';
import AddModal from './AddModal/AddModal';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const date = new Date();
  const [addMode, setAddMode] = useState(false);
  const [addRecipe, setAddRecipe] = useState(false);
  const [location, setLocation] = useState({ x: null, y: null });

  const toggleMode = () => {
    setAddMode(!addMode);
  };

  const openAddIcon = (e) => {
    if (addRecipe) {
      setAddRecipe(false);
      return;
    }
    setAddRecipe(true);
    setLocation({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      <Header
        item={
          <S.NewDietBtn onClick={toggleMode} mode={addMode}>
            <AiOutlinePlus />
          </S.NewDietBtn>
        }
      >
        주간 식단
      </Header>
      <S.Container>
        <S.Table>
          <thead>
            <tr>
              {Array(4)
                .fill()
                .map((_, idx) => (
                  <S.Time key={`${idx}-calendarTime`}>
                    {idx === 0 ? (
                      <Link
                        style={{ color: '#000', textDecoration: 'none' }}
                        to="/calendar/choose/"
                      >
                        <AiOutlineCalendar />
                      </Link>
                    ) : idx === 1 ? (
                      <>
                        <img src={morning} />
                        <span>아침</span>
                      </>
                    ) : idx === 2 ? (
                      <>
                        <img src={lunch} />
                        <span>점심</span>
                      </>
                    ) : (
                      <>
                        <img src={dinner} />
                        <span>저녁</span>
                      </>
                    )}
                  </S.Time>
                ))}
            </tr>
          </thead>
          <tbody>
            {Array(7)
              .fill()
              .map((_, idx) => (
                <tr key={`${idx}-day-row`}>
                  {Array(4)
                    .fill()
                    .map((_, i) => (
                      <S.Data
                        onClick={openAddIcon}
                        key={`${idx}-${i}-calendarTime`}
                      >
                        {i === 0 ? (
                          <S.Date>
                            <span>{idx}</span>
                            <span>요일</span>
                          </S.Date>
                        ) : i === 1 ? (
                          <>
                            <span>아침</span>
                          </>
                        ) : i === 2 ? (
                          <>
                            <span>점심</span>
                          </>
                        ) : (
                          <>
                            <span>저녁</span>
                          </>
                        )}
                      </S.Data>
                    ))}
                </tr>
              ))}
          </tbody>
        </S.Table>
      </S.Container>
      <AddModal open={addRecipe} location={location} />
    </>
  );
};

export default Calendar;
