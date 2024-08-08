// ##-----Put your React.js skills to the test ----##

// 1. Color Swatch Renderer
// Requirements: Update the ColorRenderer component to display one instance of the Color component
// for each color in the array of colors.
// Colors > Cornflower Blue, Persian Pink, Screamin Green, Tart Orange

// ColorRenderer.js
import Color from './Color';

const colors = [
  {
    hex: '#91A6FF',
    name: 'Cornflower Blue',
  },
  {
    hex: '#FF88DC',
    name: 'Persian Pink',
  },
  {
    hex: '#80FF72',
    name: 'Screamin Green',
  },
  {
    hex: '#FF5154',
    name: 'Tart Orange',
  },
];

export default function ColorRenderer() {
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.hex} hex={color.hex} name={color.name} />
      ))}
    </div>
  );
}

// Color.js 
export default function Color({ hex, name }) { 
    return ( 
        <div className='color-square' style={{ backgroundColor: hex}}> 
            <h2>{name}</h2> 
        </div> 
    ) 
}



// 2. Dark Mode Toggle 
// Requirements: 
// When the button with the className dark-mode-button is clicked, 
// the page should be displayed in the dark mode 
// When the button with the className light-mode-button is clicked, 
// the page should be displayed without dark mode 

// Dark Mode ----- Light Mode 

// DarkMode.js 
import { useState } from 'react'; 
export default function DarkMode () { 
    const [darkMode, setDarkMode] = useState(flase); 
    return ( 
        <div className={`page ${darkMode && 'dark-mode'}`}> 
            <button className='dark-mode-button' onClick={() => setDarkMode(true)}>Dark Mode</button> 
            <button className='light-mode-button' onClick={() => setDarkMode(false)}>Light Mode</button> 
        </div> 
    ) 
}

// index.css
// .page {
//     height: 100vh;
//     width: 100vw;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .dark-mode {
//     background-color: #171717;
//   }
  
//   button {
//     padding: 10px;
//     margin: 5px;
//     outline: none;
//   }
  
//   .dark-mode-button {
//     border: 2px solid white;
//     color: white;
//     background-color: #171717;
//   }
  
//   .light-mode-button {
//     border: 2px solid #171717;
//     color: #171717;
//     background-color: white;
//   }
  
//   body {
//     padding: 0px;
//     margin: 0px;
//   }



// 3. Form Validator
// Challenge:
//  Validate a user sign-up form once the user submits that form
// Requirements: 
// > When the form is submitted, validate that the user's
//   information fits the following requirements : 
//   The email, password, and password confirmation fields are filled in  
//   The email field must have exactly one @ sign in it
//   The password must be eight or more characters long
// > If any of these conditions aren't met, display an error;
//   if they are all met display a success message


// FormValidator.js

import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [message, setMessage] = useState('')

  const findErrors = () => {
    const errors = []

    if (!email || !password || !passwordConfirm) errors.push('All fields must be filled in')
    if ([...email].filter(i => i === '@').length !== 1) {
        errors.push('An email must have exactly one @sign')
    }
    if (password.length < 8) errors.push('Password must be 8 characters or longer')
    if (password !== passwordConfirm) errors.push('Passwords must match')

    return errors
  }

  const handleSubmit = e => {
    e.preventDefault()

    const errors = findErrors()
    // setErrors(errors.length ? errors.join(', ') : 'User created')
    setMessage(errors.length ? errors.join(', ') : 'User created')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      { message }
      <input type='submit' value='Submit' />
    </form>
  )
}


// 4. Dog pictures
// Challenge:
//  Use a dog picture API to display dog images on React.
// Requirements: 
// > Use the dog.ceo to fetch a random dog image and display that image on page load
//   instead of hardcoaded one there now
// > When the dog button is clicked, fetch a new dog image and render it on the UI instead

// DogPics.js
import { useEffect } from 'react';

const getDogPic = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await response.json()
  return dog.message
}
export default function DogPics () {
  // API: https://dog.ceo/dog-api/
  const [dogPic, setDogPic] = useState('')
  useEffect(() => {
    getDogPic().then(pic => setDogPic(pic))
  }, [])
  return (
    <div className='dog-pics'>
      {/* <img src='https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg' /> */}
      <img src={dogPic} />
      <button onClick={async e => setDogPic(await getDogPic())}>🐶</button>
    </div>
  )
}


// 5. Scorekeeper
// Challenge:
//  Build a scorekeeping application.

// localStroage >> localStorage allows you to store data in the browser
//    > localStorage.getItem(key) - retrive an item
//    > localStorage.setItem(key, value) - set data in localStorage

// Requirements: 
// > Use localStorage to store the score so that it persists when you come back to the page
// > You should be able to refresh the page and still see the score from the previous render

// ScoreKeeper.js
import { useEffect, useState } from 'react';

export default function ScoreKeeper() {
  const [score, setScore] = useState(
    parseInt(localStorage.getItem('score')) || 0
  );
  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);
  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore((prevScore) => prevScore + 1)}>+</button>
      <button onClick={() => setScore((prevScore) => prevScore - 1)}>-</button>
    </div>
  );
}


// 6. Window event
// Challenge:
//  Add and remove effects within React

// Requirements: 
// > When the WindowEvent component is active, add an event listner to the window that triggers
//   an alert if the user double clicks on the page.
// > Make sure to remove the window event when the component is toggeled off

// WindowEvent.js
import { useEffect } from 'react';

export default function WindowEvent () {
  useEffect(() => {
    const doubleClick = () => alert('mouse pressed')

    window.addEventListener('dblclick', doubleClick)

    return () => window.removeEventListener('dblclick', doubleClick)
  }, [])
  return (
    <h2>Window event active</h2>
  )
}

// ToggleWindowEvent.js
import { useState } from 'react'
import WindowEvent from './WindowEvent'

export default function ToggleWindowEvent () {
  const [windowEvent, setWindowEvent] = useState(false)
  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>Toggle Window Event</button>
      {windowEvent && <WindowEvent />}
    </div>
  )
}

// 7. Color picker