import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from "firebase/database";

function MatchingRepository (){
  function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
}

export default MatchingRepository;
