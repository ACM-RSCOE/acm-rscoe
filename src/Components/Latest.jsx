import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from "react-router-dom"

const Latest = () => {
    const cardRowStyle ={
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
    const cardStyle ={
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "300px",
        height: "400px",
        margin: "20px",
        flexDirection: "column",
        borderTop: "0px",
        borderRadius: "10px",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
    }
    const mystyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    const eventImg = {
        alignSelf: "flex-start"
    }
    const registerBtn ={
        width: "100px",
        height: "60px",
        cursor: "pointer",
        background: "#085ecd",
        outline: "none",
        transition: "1s ease-in-out",
        margin: "10px",
        borderRadius: "5px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div id='code-div' >
                <div className="upcoming-events">
                    <h1 style={{textAlign: "center"}}>Upcoming Events: </h1>
                    <div style={cardRowStyle} className='event-card-row'>
                        <div style={cardStyle} className='event-box'>
                            <img style={eventImg} src="../images/UpcomingEvents/logica.png" alt="img" />
                            <a target="_blank" href='https://logica2-registrations.vercel.app/' style={registerBtn}>Register</a>
                        </div>
                    </div> 
                </div>
                <div className='concept'>
                    <h1 style={{ padding: 10 }}>Concept of the Week</h1>
                    <h1 style={{ padding: 20 }}><i> Graph Traversals (Breadth First Seacrch)</i></h1>
                    <p style={{ padding: 20, fontSize: 20 }}><h3><b></b></h3>
                        BFS is a traversing algorithm that requires you to begin traversing from a specific node (the source or starting node) and traverse the graph layer by layer, thus exploring the neighbour nodes (nodes which are directly connected to source node). Then you must proceed to the next-level neighbour nodes.
                        <br />
                        <br />
                        A standard BFS implementation puts each vertex of the graph into one of two categories:
                        <ul>
                            <li> Not Visited ==: An array with all values initialised with 0.</li>
                            <li> Visited ==: An array with values updated from 0 to 1.</li>
                        </ul>
                        <br />
                        The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.<br />
                        <br /><h5><b>Algorithm : </b></h5>
                        Step 1: Start by putting any one of the graph's vertices at the back of a queue.<br />
                        Step 2: Take the front item of the queue and add it to the visited list.<br />
                        Step 3: Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the back of the queue.<br />
                        step 4: Keep repeating steps 2 and 3 until the queue is empty.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>
                        Let's understand with an Example:
                    </h3>
                    <div className='algo' style={mystyle}>
                        <img src="./Images/COD/1.png" alt="img" />
                        <img src="./Images/COD/2.png" alt="img" />
                        <img src="./Images/COD/3.png" alt="img" />
                        <img src="./Images/COD/4.png" alt="img" />
                        <img src="./Images/COD/5.png" alt="img" />
                        <img src="./Images/COD/6.png" alt="img" />
                        <img src="./Images/COD/7.png" alt="img" />
                        <img src="./Images/COD/8.png" alt="img" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>
                        Now, let's code it up:
                    </h3>
                    
                    <img src="./Images/COD/carbon.png" className='algo' alt="code" width={700} display="block" />
                   
                </div>
            </div>
        </>
    )
}

export default Latest
