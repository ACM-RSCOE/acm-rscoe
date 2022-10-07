import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from "react-router-dom"

const Latest = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
           <div id='code-div' >
                <div className='concept'>
                    <h1 style={{ padding: 10 }}>Concept of the DAY</h1>
                    <h1 style={{ padding: 20 }}>
                        <i>Difference between endl and \n in c++</i>
                    </h1>
                    <p style={{ padding: 20, fontSize: 25 }}>
                        <h3><b>What is \n ? </b></h3>
                        The newline character (\n) is called an escape sequence, and it forces the cursor to change its position to the beginning of the next line on the screen. This results in a new line.
                        <br />
                        <br />
                    </p>
                    <p style={{ padding: 20, fontSize: 25 }}>
                        <h3><b>What is endl ? </b></h3>
                        The endl is a predefined function template. It is used to insert a new line characters and flushes the stream. Most of the times it is referred as functor i.e. a function with overloaded '()'
                        <br />
                        <br />
                    </p>
                    <p style={{ padding: 20, fontSize: 25 }}>
                        <h3><b>What is the difference in between both of them ? </b></h3>
                    </p>
                    <p style={{ padding: 20, fontSize: 25 }}>
                        <h3><b>• Difference: </b></h3>
                        The main difference between endl and \n is, endl flushes the output stream each time it is called, while \n doesn't do the same.
                        <br />
                        <br />

                    </p>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28247%2C249%2C250%2C1%29&t=monokai&wt=none&l=text%2Fx-c%2B%2Bsrc&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=cout%253C%253Cendl%2520%253D%253D%2520cout%253C%253C%2522%255Cn%2522%253C%253Cflush%28%29%253B%250A%252F%252F%2520Which%2520means%2520endl%2520is%2520%255Cn%2520%252B%2520flush%28%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>

                    <p style={{ padding: 20, fontSize: 25 }}>
                        <h3><b>• Example: </b></h3>
                        Let's understand this with the help of an example. Suppose we have two different for loops running for printing A to Z characters.
                        <br />
                        <br />

                    </p>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28247%2C249%2C250%2C1%29&t=monokai&wt=none&l=text%2Fx-c%2B%2Bsrc&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520First%2520for%2520loop%2520using%2520endl%250A%2523include%2520%253Ciostream%253E%250Ausing%2520namespace%2520std%253B%250Aint%2520main%28%29%2520%257B%250A%2520%2520%252F%252F%2520CASE%25201%2520%253A%2520%250A%2520%2520%2520%2520for%28char%2520i%2520%253D%27A%27%2520%253B%2520i%253C%253D%27Z%27%2520%253Bi%252B%252B%2520%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520cout%253C%253C%2520i%2520%253C%253Cendl%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%252F%252F%2520CASE%25202%2520%253A%2520%250A%2520%2520%2520%2520for%28char%2520i%2520%253D%27A%27%2520%253B%2520i%253C%253D%27Z%27%2520%253Bi%252B%252B%2520%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520cout%253C%253C%2520i%2520%253C%253C%27n%27%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520return%25200%253B%250A%257D%250A%250A"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>

                    <p style={{ padding: 20, fontSize: 25 }}>
                        In case 1 the output buffer will get flushed every time the cout statement gets executed. So, the total number of flushes will be 26. While in the second case the output buffer will get filled with all the 26 characters and at the end will gets flush. So, total numbers of flushes will be 1.
                        <br />
                        <br />
                        Hence, though the difference is not so obvious in small programs, endl performs significatly worse than \n in large programs because of constant flushing of output buffer.
                    </p>

                </div>
            </div>
        </>
    )
}

export default Latest
