// 코드 작성 전 필독!
// 지금은 백엔드와 연동을 하지 않은 상태이기 때문에 msw라는 mock server를 사용중입니다.
// 그래서 여기에 api 요청 함수를 추가하게 되면 mocks에 handler에도 추가해야 되는데요(handler에 코드 추가 방법은 예시 코드와 구글 검색 참고)
// 이때 경로를 이곳에 한 번 handler에 한 번 총 두 번을 입력하게 됩니다.
// 만약 경로에 문제가 생겨서 수정해야 하는 경우 두 곳을 수정해야 합니다.
// 이때 오류가 발생할 수 있어요..
//
// 그래서 결론은 경로의 경우 여기에 직접 입력하지 않고
// constants 폴더의 path.js에 API_PATH에 추가해주세요!
// 어떻게 작성하는지 어떻게 사용하는지는 이미 써져 있는 코드 참고하시면 될 듯 합니다.

import { axios, axiosWithToken } from 'apis/api';
import { API_PATH } from 'constants/path';

const getPopularRecipe = () => {
  return axios.get(API_PATH.POPULAR_RECIPE);
};

const getFavoritRecipe = () => {
  return axiosWithToken.get(API_PATH.FAVORITE_RECIPE);
};

const getRecipeByCalendar = (date) => {
  return axiosWithToken.get(`${API_PATH.WEEK_CALENDAR}/${date}`);
};

const searchRecipeByName = (value) => {
  return axiosWithToken.get(`${API_PATH.SEARCH_RECIPE}?recipe_name=${value}`);
};

const getDetailRecipe = (id) => {
  return axios.get(`${API_PATH.DETAIL_RECIPE}/${id}`);
};

const getAllRecipe = () => {
  return axios.get(`${API_PATH.ALL_RECIPE}`);
};

const addDietWithFavorite = (date, data) => {
  return axiosWithToken.post(
    `${API_PATH.ADD_DIET_WITH_FAVORITE}/${date}`,
    data,
  );
};

const addDietWithCustom = (date, data) => {
  return axiosWithToken.post(`${API_PATH.ADD_DIET_WITH_CUSTOM}/${date}`, data);
};

const deleteDiet = (date, mealTime) => {
  return axiosWithToken.delete(
    `${API_PATH.DELETE_DIET}?date=${date}&meal_time=${mealTime}`,
  );
};

const getDetailRecipeReview = (id) => {
  return axios.get(`${API_PATH.DETAIL_RECIPE_REVIEW}/${id}`);
};

const addFavoriteRecipe = (id) => {
  return axiosWithToken.post(`${API_PATH.ADD_FAVORITE}/${id}`);
};

const deleteFavoriteRecipe = (id) => {
  return axiosWithToken.post(`${API_PATH.CANCEL_FAVORITE}/${id}`);
};

const requestGetPossibleRecipe = (ids) => {
  return axiosWithToken.get(`${API_PATH.POSSIBLE_RECIPE}?ingredient_id=${ids}`);
};

const addReview = (recipe_id, data) => {
  return axiosWithToken.post(`${API_PATH.NEW_REVIEW}/${recipe_id}`, data);
};

const getMyRecipe = () => {
  return axiosWithToken.get(`${API_PATH.MY_RECIPE}`);
};

const getMyReview = () => {
  return axiosWithToken.get(`${API_PATH.MY_REVIEW}`);
};

const deleteMyReview = (id) => {
  return axiosWithToken.post(`${API_PATH.DELETE_MYREVIEW}`, {
    recipe_id: id
  });
};

const favoritRecipe = (id) => {
  return axiosWithToken.get(`${API_PATH.FAVORITE_RECIPE}/${id}`);
};

const checkFavoriteRecipe = (recipe_id) => {
  return axiosWithToken.get(`${API_PATH.CHECK_FAVORITE_RECIPE}/${recipe_id}`);
};

export {
  getPopularRecipe,
  getFavoritRecipe,
  getRecipeByCalendar,
  searchRecipeByName,
  getDetailRecipe,
  getAllRecipe,
  addDietWithFavorite,
  addDietWithCustom,
  deleteDiet,
  getDetailRecipeReview,
  addFavoriteRecipe,
  deleteFavoriteRecipe,
  requestGetPossibleRecipe,
  favoritRecipe,
  addReview,
  getMyRecipe,
  getMyReview,
  deleteMyReview,
  checkFavoriteRecipe,
};
