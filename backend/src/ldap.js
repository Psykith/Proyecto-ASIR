import ldap from 'ldapjs';
import dotenv from 'dotenv';
dotenv.config();

const ldapLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    const client = ldap.createClient({ url: process.env.LDAP_URL });

    const userDN = `uid=${username},${process.env.LDAP_BASE_DN}`;

    client.bind(userDN, password, (err) => {
      if (err) {
        resolve({ success: false });
      } else {
        resolve({ success: true });
      }
      client.unbind();
    });
  });
};

export default ldapLogin;
