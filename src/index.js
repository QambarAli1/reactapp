import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import anony1 from './images/anony1.jpg'
import anony2 from './images/anony2.jpg'
import anony3 from './images/anony3.jpg'
import anony4 from './images/anony4.jpg'

import html from './images/html.jpg'
import css from './images/css.png'
import js from './images/js.png'
import bs from './images/bs.png'
import like from './images/like.png'
import comment from './images/comment.png'
import share from './images/share.png'
import profile from './images/profile.jpg'





// import { icon1 } from '../node_modules/react-icons/lib'

const newDate = new Date()
const day = newDate.getDate()
const month = newDate.getMonth()
const year = newDate.getFullYear()

function Profile(props){
  return <div className='profile'>
    <div className='cover'>
        <div className='profile-pic'>

        </div>
    </div>
    <div className='username'>
      <h1>Qambar Ali</h1>
    </div>
  </div>
}

function Post(props) {
  return <div className='main-div'>
    <div className='postDiv'>
      <div className='post-head'>
        <img className='profile-img' src={props.profile}></img>
        <span className='nameanddate'>
          <h3>{props.name}</h3>
          <p className='postDate'> {day}/{month+1}/{year}</p>
        </span>
        <br />
      </div>
      <div className='post-body'>
        <p>
          {props.para}
        </p>
        <img src={props.bodyimg} ></img>

      </div>
      <div className='post-foot'>
        <div className='actions'>
          <span><img src={like}></img>like</span>
          <span><img src={comment}></img>Comment</span>
          <span><img src={share}></img>Share</span>
        </div>
        <div className='cmnt'>
          <img className='cmnt-img' src={props.profile}></img>
          <input placeholder={props.placeholder}></input>
        </div>
      </div>

    </div>
  </div>
}

ReactDOM.render(
  <div>
    <Profile />
    <Post name='Qambar Ali' profile={profile} bodyimg={html} placeholder='Comment on the post'
      para={` HTML (Hypertext Markup Language) is the code that is used to structure a web page
          and its content. For example, content could be structured within a set of paragraphs,
          a list of bulleted points, or using images and data tables.`} />
    <Post name='Qambar Ali' profile={profile} bodyimg={css} placeholder='Comment on the post'
      para={`CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying 
      out and structuring web pages (HTML or XML). This language contains coding elements and is 
      composed of these “cascading style sheets” which are equally called CSS files`} />
    <Post name='Qambar Ali' profile={profile} bodyimg={bs} placeholder='Comment on the post'
      para={`
      Bootstrap is a framework to help you design websites faster and easier. It includes HTML and CSS based design 
      templates for typography, forms, buttons, tables, navigation, modals, image carousels, etc. It also gives you
       support for JavaScript plugins`} />
    <Post name='Qambar Ali' profile={profile} bodyimg={js} placeholder='Comment on the post'
      para={`JavaScript is commonly used for creating web pages. It allows us to add dynamic behavior to 
      the webpage and add special effects to the webpage. On websites, it is mainly used for validation 
      purposes. JavaScript helps us to execute complex actions and also enables the interaction of 
      websites with visitors.`} />

  </div>
  , document.querySelector('#root'))
