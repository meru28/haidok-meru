import axios from "axios";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_UNSUCCESS,
  LOGIN_SYSTEM_ERROR,
  AUTH_LOADING,
  LOGOUT,
  COOKIE_CHECKED
} from "./types";
// import { dispatch } from "rxjs/internal/observable/pairs";

// export const onUserLocationFound = ({ user_location }) => {
//   return dispatch => {
//     dispatch({ type: USER_LOCATION_FOUND });
//     if (user_location === "") {
//       dispatch({ type:});
//     }
//   };
// };

export const onUserLogin = ({ username, password }) => {
  //objek username & password terima 1 parameter lg, krn sdh di destructuring maka tidak perlu bikin variabel lg di bawah, isi text box dikirim ke funct ini.
  return dispatch => {
    //funct ini blm dipakai tp hny dibuat
    //gunanya dispatch adalah function yg dikirim dari action ke reducer, dlm baris dibawah ini adalah utk masuk ke reducer dgn type auth loading, dan action ini kirim ke semua reducer yg menunjuk pada case yg dituju
    //return hny bisa
    dispatch({ type: AUTH_LOADING }); // tombol berubah jadi loading
    // setTimeout(() => loginYok(dispatch,username,password), 2000);
    loginYok(dispatch, username, password); //penjelasannya adalah dispatch sebuah function, username & password adalah string, ini dipakai lagi utk
    //jd parameter di function loginYok
  };
};

var loginYok = (dispatch, username, password) => {
  axios
    .get("http://localhost:1997/users", {
      params: {
        username,
        password
      }
    })
    .then(res => {
      console.log(res);
      if (res.data.length > 0) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: { username }
        });
      } else {
        dispatch({
          type: USER_LOGIN_UNSUCCESS,
          payload: "username atau passord Anda salah!"
        });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_SYSTEM_ERROR, payload: "System Error" });
    });
};
