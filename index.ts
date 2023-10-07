import { buildTree, removeKeysFromRoot, treeToObject } from "./node.controller"
import { Node } from "./node.model"

//Example

const obj = {
    data: { 
        attributes: { 
            category: { 
                data: { 
                    title: 'lorem ipsum' 
                } 
            },
            test: 'testing'
        } 
    }
}

const tree: Node = buildTree(obj)

removeKeysFromRoot(tree, [ 'data', 'attributes' ])

console.log(treeToObject(tree)) // { category: { title: 'lorem ipsum' }, hihi: 'haha' }
