import React from 'react';
import ReactDOM from 'react-dom';
import './ch1.css';

/**
 https://scotch.io/courses/10-react-challenges-beginner/display-simple-data-with-jsx
 * ------------------------
 */
const user = {
  name: 'Sujung Choi',
  location: 'Redmond, WA',
  foodType: 'Everything',
  age: 32,
  likes: 'Coding, Crocheting, Knitting',
  twitterUsername: 'sujungschoice',
  avatar:
    'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg'
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function One() {
  const url = `https://twitter.com/${user.twitterUsername}`
  return (
    <div className="one">
      {/* Show user data here */}
      <div className="user-deets">
        <img src={user.avatar} alt={user.name}/>

        <h3>
          <a href="{url}">{user.name} </a>
        </h3>

        <p>
          <strong>Location</strong> {user.location}
        </p>
        <p>
          <strong>Eats</strong> {user.foodType}
        </p>
        <p>
          <strong>Age</strong> {user.age}
        </p>
        <p>
          <strong>Likes</strong> {user.likes}
        </p>
        <p>
          <strong>Twitter</strong> 
          <a href={url}>@{user.twitterUsername}</a>
        </p>
      </div>

    </div>
  );
}

export default One;