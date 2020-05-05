import React from "react";

export default function Header(props){
    return(

        // skeleton wrapper, has to have one wrapper
           <>     
          <h1> Clicky Game! </h1>
         <h2> Score: {props.score}  High Score: {props.highscore} </h2>
       </>
    )
}