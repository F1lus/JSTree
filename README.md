# JSTree

**JSTree** is a side project which aims to solve JavaScript objects' key management problems with a **Tree Data Structure**.

## The algorithms

Let's say that you want to remove certain keys from an object.
What these algorithms will do in this case:
1. The object will be converted into a General Tree Data Structure
2. The `removeKeysFromRoot` function will remove the array of keys from the Tree
3. If a node is removed, the children of the node won't be dropped, instend they will be inserted into their former parent's level
4. After that, you will have the chance to convert the tree back to an object

__Note that the algorithms are working with recursion__

## The Tree

When a Tree is created, a **ROOT** element will be inserted at the top. This node is meant to be the starting point of the application, which bundles together the object - in this case, the **subtrees**.

__More features might be added in the future__