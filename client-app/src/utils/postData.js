const hostname = window && window.location && window.location.hostname;
const domain =
  hostname === "localhost"
    ? "http://localhost:8080"
    : "https://where-is-whippy.herokuapp.com";

// Dont think this is used
const postObject = (state) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  };
};

function postVendorSignUpInformation(state) {
  return fetch(domain + "/vendors/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  });
}

function postVendorLoginInformation(state) {
  return fetch(domain + "/vendors/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  });
}

function postCustomerSignUpInformation(state) {
  return fetch(domain + "/customers/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  });
}

function postCustomerLoginInformation(state) {
  return fetch(domain + "/customers/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  });
}

function addCustomerCoords(coordsObject) {
  return fetch(domain + "/customers/coords", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(coordsObject),
  });
}

export {
  postVendorSignUpInformation,
  postCustomerSignUpInformation,
  postVendorLoginInformation,
  postCustomerLoginInformation,
  addCustomerCoords,
};
