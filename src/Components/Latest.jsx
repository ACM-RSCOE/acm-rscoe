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
                    <h1 style={{ padding: 10 }}>Concept of the Week</h1>
                    <h1 style={{ padding: 20 }}><i> Tree Traversals (Inorder, Preorder, Postorder, Levelorder)</i></h1>
                    <p style={{ padding: 20, fontSize: 25 }}><h3><b>• Inorder Traversal: </b></h3>  The left subtree is visited first in this traversal method, followed by the root and then the right subtree. Always keep in mind that every node could be a subtree by itself.
                        The output will contain key values sorted in ascending order if a binary search tree is traversed in inorder.<br />
                        <br /><h5><b>Algorithm : </b></h5>
                        Step 1: Traverse the left subtree, i.e., call Inorder(left→subtree)<br />
                        Step 2: Visit the root.<br />
                        Step 3: Traverse the right subtree, i.e., call Inorder(right→subtree)
                    </p>
                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28221%2C221%2C221%2C1%29&t=monokai&wt=none&l=auto&width=680&ds=true&dsyoff=5px&dsblur=68px&wc=true&wa=true&pv=24px&ph=72px&ln=false&fl=1&fm=Hack&fs=16.5px&lh=125%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Aprivate%253A%2520%250A%2520%2520%2520%2520vector%253Cint%253E%2520solve%28TreeNode*%2520root%2520%252C%2520vector%253Cint%253E%2520%2526ans%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F*Inorder-%253E%2520left%2520-%2520root%2520-%2520ans*%252F%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eleft%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28root-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eright%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cint%253E%2520inorderTraversal%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520solve%28root%252C%2520ans%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%250A%252F%252F%2520Time%2520Complexity%2520%253A%2520O%28N%29%2520n-%253ENumber%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520Complexity%2520%253A%2520O%28Height%29"
                        className='code'
                        sandbox="allow-scripts allow-same-origin">
                    </iframe>



                    <p style={{ padding: 20, fontSize: 25 }}><h3><b>• Inorder Morris Traversal : </b></h3> We can navigate the tree without using stack or recursion by using the Morris Traversal. Threaded Binary Tree is the foundation of the Morris Traversal concept. In this traversal, we first create links to Inorder successors and print the data using these links. Then, we go back and undo the changes to bring the tree back to its original state.<br />
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
