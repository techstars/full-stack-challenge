export const setFormBody = (details, API) => {
  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch(API, {
    method: "POST",
    body: formBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
