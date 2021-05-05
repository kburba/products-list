export function* apiFetch(input: RequestInfo, init: RequestInit) {
  try {
    let response = yield fetch(input, init);
    return yield response.json();
  } catch (e) {
    throw e.message;
  }
}
