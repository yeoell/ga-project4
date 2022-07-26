import "./Game.css";

function Gameboard({}) {
  return (
    <div className="nav">
      <header>
        <h1>game</h1>
      </header>
      <div className="gameboard">
        <div className="container">
          <div className="row" id="row-1">
            <div className="first square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gameboard;

// Be primarily a React single-page-app (not server-generated HTML)
// Use at least 2 different URL paths to allow users to open 'pages' within the app (e.g. using ReactRouter)
// main page with game
// create account/login
//
// Allow users to add, share, modify or organise some kind of data for some useful purpose.
// add: create account
// user stats show when logged in (win, lose), otherwise nothing saved
// Have passing tests for some core logic and/or components

// matching game with images
// set timeout on cards flipping back over
// timer gets shorter as fewer cards are left
// cards shuffle at different stages (50% to go, 25% to go)
// have a certain amount of tries before game times out

// components of game:
// 1. gameboard with cards
// 2. randomise div with image placement
// 3. show image on click
// 3a. animate for div to flip over on click
// 4. cards either match or not
// 4a. if match - cards disappear
// 4b. if mismatch - cards flip back over
//
