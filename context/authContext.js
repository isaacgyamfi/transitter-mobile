import React, {createContext, useMemo, useState} from 'react';
import Auth0 from 'react-native-auth0';
export const AuthContext = createContext();

const auth0 = new Auth0({
  domain: 'dev-dgebsf68.us.auth0.com',
  clientId: 'eRMOieq3SicohzLQsYi33GvWUr3EDfLM',
});

const AuthContextProvider = props => {
  const [authToken, setAuthToken] = useState(null);

  const handleLoginPress = async () => {
    try {
      let credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
      });
      setAuthToken(credentials.accessToken);
      // console.log('authToken', credentials.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogoutPress = () => {
    auth0.webAuth.clearSession().catch(error => console.log(error));
    setAuthToken(null);
  };

  const getUserProfile = async () => {
    const res = await auth0.auth.userInfo({token: authToken});
    return res;
    // auth0.auth
    //   .userInfo({token: authToken})
    //   .then(result => console.log(result))
    //   .catch(console.error);
  };
  const values = useMemo(
    () => ({
      authToken,
      setAuthToken,
      handleLoginPress,
      handleLogoutPress,
      getUserProfile,
    }),
    [authToken],
  );
  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
