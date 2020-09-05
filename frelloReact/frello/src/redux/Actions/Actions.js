import axios from "axios";
import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  FETCH_ERRORS,
  DELETE_PROJECT,
} from "../Types/Types";

export const createProject = (project) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/project`, project)
      .then((response) => {
        dispatch({
          type: FETCH_ERRORS,
          payload: {},
        });
      })
      .catch((errors) => {
        dispatch({
          type: FETCH_ERRORS,
          payload: errors.response.data,
        });
      });
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_PROJECTS_REQUEST,
    });
    axios
      .get(`http://localhost:8080/api/project/all`)
      .then((response) => {
        const projects = response.data;
        dispatch({
          type: FETCH_PROJECTS_SUCCESS,
          payload: projects,
        });
      })
      .catch((errors) => {
        dispatch({
          type: FETCH_ERRORS,
          payload: errors.response.data,
        });
      });
  };
};

// FIX BUG WHERE IF ID NOT FOUND IT NEEDS TO GO TO HOME
export const fetchProject = (id) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_PROJECT_REQUEST,
    });
    axios
      .get(`http://localhost:8080/api/project/${id}`)
      .then((response) => {
        const project = response.data;
        dispatch({
          type: FETCH_PROJECT_SUCCESS,
          payload: project,
        });
      })
      .catch((errors) => {});
  };
};
