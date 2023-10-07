import { Node, NodeKeyType } from "./node.model"

//region Exported Methods

/**
 * Creates a tree from a given object
 * 
 * Also adds a root element, which be the starting point of the algorithm
 * 
 * @param input the object which will be converted to a tree
 * @returns 
 */
export function buildTree(input: object): Node {
    const rootNode: Node = {
        key: NodeKeyType.ROOT,
        children: []
    }

    buildSubTree(rootNode, input)

    return rootNode
}

/**
 * Removes an array of keys from a given tree
 * 
 * - Note that this will remove all the occurrences on every layer of the tree
 * - Throws an error if not called from the Root element!
 * - It will modify the original tree
 * 
 * @param tree 
 * @param keyArray the key(s) to be removed)
 */
export function removeKeysFromRoot(tree: Node, keyArray: string[]) {
    if(tree.key !== NodeKeyType.ROOT) {
        throw new Error('No tree root element found')
    }
    removeKeysFromSubTree(tree, keyArray)
}

/**
 * Converts a tree to an object
 * 
 * Also removes the Root element
 * 
 * @param tree 
 * @returns 
 */
export function treeToObject(tree: Node) {
    const values = Object.values(toObject(tree))
    if(values.length === 0){
        return {}
    }
    return values[0]
}

//endregion Exported Methods

/**
 * Converts a tree to an object
 * 
 * Note that this is meant to be a recursive function
 * 
 * @param tree 
 * @returns 
 */
function toObject(tree: Node) {
    if(tree.children.length === 0) {
        return tree.key
    }
    let obj = {
        [tree.key]: {}
    }
    tree.children.forEach(child => {
        const value = toObject(child)
        if(typeof value !== 'object'){
            obj[tree.key] = value
        } else {
            obj[tree.key] = { ...obj[tree.key], ...value}
        }
    })

    return obj
}

/**
 * Remove keys from a subtree
 * 
 * Note that this is meant to be a recursive function
 * 
 * @param root 
 * @param keyArray 
 */
function removeKeysFromSubTree(root: Node, keyArray: string[]) {
    const children: Node[] = []
    root.children.forEach(innerChild => {
        removeKeysFromSubTree(innerChild, keyArray)
    })

    const newChildren = root.children.filter(innerChild => {
        const shouldBeRemoved = keyArray.includes(innerChild.key as string)
        if(shouldBeRemoved){
            children.push(...innerChild.children)
        }
        return !shouldBeRemoved
    })

    root.children = [ ...newChildren, ...children ]
}

/**
 * Builds a subtree for a given root element
 * 
 * @param root 
 * @param input rest of the object to be added to the tree
 */
function buildSubTree(root: Node, input: object) {

    Object.entries(input)
        .forEach(([ key, value ]) => {
            const childNode: Node = {
                key,
                children: []
            }

            if(typeof value === 'object') {
                buildSubTree(childNode,value)
            } else {
                childNode.children.push({
                    key: value,
                    children: []
                })
            }

            root.children.push(childNode)
        })
    
}