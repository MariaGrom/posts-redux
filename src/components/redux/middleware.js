// Мидлвара, которая отсеивает запрещенные слова для заголовка поста
import { showAlert } from './action';
import { CREATE_POST } from './types';

const forbidden = ['fuck', 'php', 'spam'];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((w) => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(
            showAlert(
              'В заголовке запрещено использовать одно из слов, которое вы указываете'
            )
          );
        }
      }

      return next(action);
    };
  };
}
