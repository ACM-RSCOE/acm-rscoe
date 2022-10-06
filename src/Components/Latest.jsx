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
                    <p style={{ padding: 20, fontSize: 25 }}><h3><b>• Inorder : </b></h3>  The left subtree is visited first in this traversal method, followed by the root and then the right subtree. Always keep in mind that every node could be a subtree by itself.
The output will contain key values sorted in ascending order if a binary search tree is traversed in inorder.<br/>
<br/><h5><b>Algorithm : </b></h5>
Step 1: Traverse the left subtree, i.e., call Inorder(left→subtree)<br/>
Step 2: Visit the root.<br/>
Step 3: Traverse the right subtree, i.e., call Inorder(right→subtree)
</p>
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28221%2C221%2C221%2C1%29&t=monokai&wt=none&l=auto&width=680&ds=true&dsyoff=5px&dsblur=68px&wc=true&wa=true&pv=24px&ph=72px&ln=false&fl=1&fm=Hack&fs=16.5px&lh=125%25&si=false&es=2x&wm=false&code=class%2520Solution%2520%257B%250Aprivate%253A%2520%250A%2520%2520%2520%2520vector%253Cint%253E%2520solve%28TreeNode*%2520root%2520%252C%2520vector%253Cint%253E%2520%2526ans%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28root%2520%253D%253D%2520NULL%29%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F*Inorder-%253E%2520left%2520-%2520root%2520-%2520ans*%252F%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eleft%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520ans.push_back%28root-%253Eval%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520solve%28root-%253Eright%252Cans%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520ans%253B%250A%2520%2520%2520%2520%257D%250Apublic%253A%250A%2520%2520%2520%2520vector%253Cint%253E%2520inorderTraversal%28TreeNode*%2520root%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520vector%253Cint%253E%2520ans%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520solve%28root%252C%2520ans%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%253B%250A%250A%252F%252F%2520Time%2520Complexity%2520%253A%2520O%28N%29%2520n-%253ENumber%2520of%2520nodes%2520in%2520tree%250A%252F%252F%2520Space%2520Complexity%2520%253A%2520O%28Height%29"
className='code'
sandbox="allow-scripts allow-same-origin">
</iframe>
                   
                </div>

            </div>


        </>
    )
}

export default Latest
