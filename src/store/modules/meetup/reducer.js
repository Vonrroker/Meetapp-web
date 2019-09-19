import { produce } from 'immer';
import { utcToZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';
import { pt } from 'date-fns/esm/locale';

const INITIAL_STATE = {
  meetups: [],
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/SUCCESS': {
        const { meetups } = action.payload;

        const data = meetups.map(m => {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

          const date = utcToZonedTime(m.date, timezone);

          return {
            ...m,
            formatedDate: format(date, "d 'de' MMMM 'às' hh'h'", {
              locale: pt,
            }),
          };
        });

        draft.meetups = data;
        draft.loading = false;
        break;
      }

      case '@meetup/CREATE_SUCCESS': {
        const dataMeetup = action.payload;

        draft.meetups.push(dataMeetup);
        break;
      }

      case '@meetup/DELETE_SUCCESS': {
        const { id } = action.payload;
        const index = draft.meetups.findIndex(m => String(m.id) === String(id));

        draft.meetups.splice(index, 1);
        console.tron.log('chegou1');
        break;
      }

      default:
    }
  });
}
