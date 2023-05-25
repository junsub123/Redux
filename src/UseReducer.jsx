import React,{useState, useReducer} from "react";
import Student from "./Student";

const reducer = (state, action) => {
    switch(action.type){
        case 'add-student': // 학생추가
            const name = action.payload.name
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            }
            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            }
        case 'delete-student': // 학생삭제
            return {
                count: state.count - 1,
                students: state.students.filter(student => student.id !== action.payload.id)
            }
        case 'mark-student': // 학생체크
            return{
                count: state.count,
                students: state.students.map(student => {
                    if(student.id === action.payload.id){
                        return {...student, isHere: !student.isHere}
                    }
                    return student
                })
            }
        default:
            return state
    }
}

const initalState = {
    count: 0,
    students: []
}


function UseReducer() {

    const [name, setName] = useState("");
    const [studentInfo, dispatch] = useReducer(reducer, initalState)

    return(
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : {studentInfo.count}</p>
            <input 
                type="text"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
                dispatch({ type: 'add-student', payload: {name} })
            }}>추가</button>
            {studentInfo.students.map((student) => {
                return(<Student 
                    key={student.id} 
                    name={student.name} 
                    dispatch={dispatch} 
                    id={student.id} 
                    isHere={student.isHere} />)
            })}
        </div>
    )
}

export default UseReducer