/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */

export const httpConstants = {
  METHOD_TYPE: {
    POST: "POST",
    PUT: "PUT",
    GET: "GET",
    DELETE: "DELETE",
  },
  CONTENT_TYPE: {
    APPLICATION_JSON: "application/json",
    MULTIPART_FORM_DATA: "multipart/form-data",
    APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
    IMAGE_PNG: "image/png",
  },
  DEVICE_TYPE: {
    WEB: "web",
  },
  API_END_POINT: {
    GET_CONTRACTS_LIST: "/contract-list",
    ADD_CONTRACT: "/contract",
    HIDE_CONTRACT: "/hide-contract",
    SHOW_CONTRACT: "/show-contract",
    RENAME_CONTRACT: "/contract-name",
    GET_USER: "/user",
    ADD_TAGS: "/tags",
  },
};
