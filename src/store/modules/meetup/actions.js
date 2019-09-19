export function meetupRequest() {
  return {
    type: '@meetup/REQUEST',
  };
}

export function meetupSuccess(meetups) {
  return {
    type: '@meetup/SUCCESS',
    payload: { meetups },
  };
}

export function meetupCreateRequest(meetup) {
  return {
    type: '@meetup/CREATE_REQUEST',
    payload: { ...meetup },
  };
}

export function meetupCreateSuccess(meetup) {
  return {
    type: '@meetup/CREATE_SUCCESS',
    payload: { ...meetup },
  };
}

export function meetupDeleteRequest(id) {
  return {
    type: '@meetup/DELETE_REQUEST',
    payload: { id },
  };
}

export function meetupDeleteSuccess(id) {
  return {
    type: '@meetup/DELETE_SUCCESS',
    payload: { id },
  };
}
