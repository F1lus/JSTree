/**
 * Tree Node type
 * 
 * A Node is considered a leaf when it has no children
 */
export type Node = {
    key: any
    children: Node[]
}

/**
 * Possible default key values for the algorithm
 * 
 * It is an enum so it might be easily expanded in the future
 * Each of the values must be unique
 * TODO: consider a better way to guarantee uniqueness
 */
export enum NodeKeyType {
    ROOT = "$ROOT"
}