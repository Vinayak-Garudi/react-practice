import React from 'react'
import { actions } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.allSlice.counter)
    const num = useSelector((state) => state.allSlice.num)

    return (
        <>
            <div className="home-container">
                <h3>Home</h3>
                <h4>Counter: {counter}</h4>
                <h4>Number : {num}</h4>
                <div className="btns" style={{ "display": "flex", "justifyContent": "center" }}>
                    <button onClick={() => dispatch(actions.counterAdd())}>Count +</button>
                    <button onClick={() => dispatch(actions.counterSub())}>Count -</button>
                    <button onClick={() => dispatch(actions.numAdd(10))}>Add 10</button>
                    <button onClick={() => dispatch(actions.numSub(5))}>Sub 5</button>
                    <button onClick={() => dispatch(actions.resetAll())}>Reset All</button>
                </div>
            </div>
        </>
    )
}

export default Home