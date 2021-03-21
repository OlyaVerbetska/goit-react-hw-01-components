import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const user = {
//   "name": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// };
// const Profile = (
// <div class="profile">
//   <div class="description">
//     <img
//       src={user.avatar}
//       alt="Аватар пользователя"
//       class="avatar"
//       //width="300px"
//     />
//     <p class="name">{user.name}</p>
//     <p class="tag">@{user.tag}</p>
//     <p class="location">{user.location}</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{user.stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{user.stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{user.stats.likes}</span>
//     </li>
//   </ul>
// </div>
// )
// ReactDOM.render(Profile, document.getElementById("root"))