/* 
**question: 在二叉树中搜索所有值为 7的节点，请返回根节点到这些节点的路径，并要求路径中不包含值为 3的节点
*/
function backtrack(state,choices,res){
    if(isSolution(state)){
        recordSolution(state,res)
        return 
    }
    for(let choice of choices){
        if(isValid(state,choice)){
            makeChoice(state,choice)
            backtrack(state,choice,res)
            undoChoice(state,choice)
        }
    }

}
const isSolution = (state) =>{
    return state&&state[state.length-1]===7
}
const recordSolution = ()=>{
    res.push([...state])
}
const isValid = (state,choice) =>{
    return choice&&choice.val!==3
}
const makeChoice = (state,choice)=>{
    state.push(choice)
}
const undoChoice = (state) =>{
    state.pop()
}