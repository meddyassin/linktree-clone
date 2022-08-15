// I wanna play the long term game
// I wanna make a career out of software dev 
// for the next 7 years at least 
// I wanna try everything, learn new things and master the basics
// 7 years from now I'll turn 30, a lot of things may change by that time

// things I don't understand in linktree
// the layout will break down at width 800px 
// they are pretty slow

// how I made the linktree clone in just one day!
// I had this code, that I use for setting up authentication
// and linktree each authenticating user to firebase database
// what ealse you need?
// you'll just code the admin page
// and whenever a user changes something there
// you'll store it on firebase
// each use has his own array of data
// this array is organised by number
// number 0 => contains the basic info that I get from google auth
// number 1 => contains his customisation of the page 
// number 2 to infinity => contains the links of the user and their properties

// tell your father the following
// this is my facebook
// let us go the carthage airport
// take a picture 
// image what 3am moncef will say
// sabra, fatma, they all will see this pic on my facebook
// my old friends also
// the ppl who laughed at me 
// this will provide me with a new amazing start

// your sisters must be saying .. haha look at his son, he is a failure
// and then sandnly, I'll appear at the airport 

// try as hard as you can so that you can send an invite to sabra

// yakha na bach marbout ? ijam3a bach rabtitni ? ichhada kifah na marbout biha ?
// najm min 8odwa b9arar bark nasb7 fi dubai


// to fix
// if a user changes things in localStorage
// if there is no link, the background will be cutted
// if localStorage contains ] or things like that it won't work

// change the name of the copied className to an other name of your own
import { Button } from '@chakra-ui/react'
import { useContext } from "react"
import { authContext } from "./contexts/authContext"
import { Link } from "react-router-dom"

function Home() {
    const {signInWithGoogle} = useContext(authContext)

    return (
        <div>
            <Link to="/admin">
                <Button colorScheme='blue' onClick={signInWithGoogle}>Log in with google</Button>
            </Link>
        </div>
    )
}

export default Home