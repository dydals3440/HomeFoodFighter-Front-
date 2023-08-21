import { useState, useEffect } from 'react';
import {
  AiOutlineCalendar,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';
import { useSearchParams, Link } from 'react-router-dom';

import morning from 'assets/MainMorningIcon.svg';
import lunch from 'assets/MainLunchIcon.svg';
import dinner from 'assets/MainNightIcon.svg';
import Header from 'components/Header/Header';

import * as S from './Calendar.styles';
import AddModal from './AddModal/AddModal';

import { getRecipeByCalendar } from 'apis/request/recipe';
import { DAY_KOREAN } from 'constants/date';
import { dateToString, getMonday } from 'utils/date';
import { convertCalendarData } from 'utils/recipe';
import useError from 'hooks/useError';

const Calendar = () => {
  const [date, setDate] = useState(getMonday(new Date()));
  const [week, setWeek] = useState(Array(7).fill());
  const [diet, setDiet] = useState({});
  const [addMode, setAddMode] = useState(false);
  const [addLink, setAddLink] = useState('');
  const [addRecipe, setAddRecipe] = useState(false);
  const [isRecipe, setIsRecipe] = useState(false);
  const [location, setLocation] = useState({ x: null, y: null });

  const [searchParams, _] = useSearchParams();
  const handleError = useError();

  useEffect(() => {
    if (searchParams.has('date')) {
      setDate(new Date(searchParams.get('date')));
      getRecipeByCalendar(searchParams.get('date'))
        .then((res) => setDiet(convertCalendarData(res.data.result)))
        .catch((e) => handleError(e));
      setWeek(
        week.map((_, idx) => new Date(searchParams.get('date')).addDays(idx)),
      );
    } else {
      getRecipeByCalendar(dateToString(getMonday(new Date())))
        .then((res) => setDiet(convertCalendarData(res.data.result)))
        .catch((e) => handleError(e));
      setWeek(week.map((_, idx) => new Date(dateToString(date)).addDays(idx)));
    }
  }, []);

  const closeModal = () => {
    setAddRecipe(false);
  };

  const toggleAddMode = () => {
    if (addMode) {
      setAddRecipe(false);
      setAddLink('');
      setIsRecipe(false);
    }
    setAddMode(!addMode);
  };

  const openAddIcon = (date, recipe) => (e) => {
    if (!addMode) return;
    if (addRecipe) {
      setAddRecipe(false);
      setAddLink('');
      setIsRecipe(false);
      return;
    }
    setAddRecipe(true);
    setAddLink(date);
    setIsRecipe(recipe);
    setLocation({ x: e.pageX, y: e.pageY });
  };

  const addCustomRecipe = (recipe) => {
    setDiet((prev) => {
      if (prev[new Date(recipe.bydate)])
        prev[new Date(recipe.bydate)][recipe.meal_time] = recipe;
      else {
        prev[new Date(recipe.bydate)] = {};
        prev[new Date(recipe.bydate)][recipe.meal_time] = recipe;
      }
      return prev;
    });
  };

  const deleteRecipe = (date, time) => {
    setDiet((prev) => {
      delete prev[date][time];
      return prev;
    });
  };

  return (
    <>
      <Header
        item={
          <S.NewDietBtn onClick={toggleAddMode} mode={addMode}>
            {addMode ? <AiOutlineMinus /> : <AiOutlinePlus />}
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
                        <img src={morning} /> <span>아침</span>
                      </>
                    ) : idx === 2 ? (
                      <>
                        <img src={lunch} /> <span>점심</span>
                      </>
                    ) : (
                      <>
                        <img src={dinner} /> <span>저녁</span>
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
                <tr key={dateToString(week[idx] || new Date().addDays(idx))}>
                  {Array(4)
                    .fill()
                    .map((_, i) => (
                      <S.Data
                        onClick={openAddIcon(
                          `${dateToString(
                            week[idx] || new Date().addDays(idx),
                          )}-${i}`,
                          diet[week[idx]] && diet[week[idx]][i],
                        )}
                        key={`${dateToString(
                          week[idx] || new Date().addDays(idx),
                        )}-${i}`}
                      >
                        {i === 0 ? (
                          <S.Date>
                            <span>{week[idx]?.getDate()}</span>
                            <span>{DAY_KOREAN[(idx + 1) % 7]}</span>
                            {week[idx]?.getFullYear() ===
                              new Date().getFullYear() &&
                            week[idx]?.getMonth() === new Date().getMonth() &&
                            week[idx]?.getDate() === new Date().getDate() ? (
                              <span className="today">오늘</span>
                            ) : null}
                          </S.Date>
                        ) : (
                          diet[week[idx]] &&
                          diet[week[idx]][i] && (
                            <S.RecipeLink
                              to={
                                diet[week[idx]][i].recipe_id
                                  ? `/recipe/detail/${
                                      diet[week[idx]][i].recipe_id
                                    }`
                                  : null
                              }
                            >
                              {diet[week[idx]][i].name}
                            </S.RecipeLink>
                          )
                        )}
                      </S.Data>
                    ))}
                </tr>
              ))}
          </tbody>
        </S.Table>
      </S.Container>
      <AddModal
        params={addLink}
        open={addRecipe}
        location={location}
        deleteMode={isRecipe}
        addCustomRecipe={addCustomRecipe}
        deleteRecipe={deleteRecipe}
        toggleMode={closeModal}
      />
    </>
  );
};

export default Calendar;
