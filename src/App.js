import './App.css';
import { useState } from 'react';



function App() {

  
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [numTitle, setNumTitle] = useState(0);
  let [inputText, setInputText] = useState('');
  let [date, setDate] = useState([new Date().getFullYear() + '년' + (new Date().getMonth() + 1) + '월'
   + new Date().getDate() + '일'])

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {
        title.map((data,i) => {
          return (
            <div className='list'>
              <h4 onClick={() => {setModal(!modal); setNumTitle(i)}}>{title[i]}<span onClick={() => {
                let copy = [...like];
                copy[i] += 1
                setLike(copy);
              }}>👍</span> {like[i]} </h4>
              
              <p>{date[i]}</p>
              <button onClick={(e) => {
                let copy = [...title];
                copy.pop(e.target);
                setTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      {
        modal == true ? <Modal title={title} numTitle={numTitle} /> : null
      }

      <input onChange={(e) => {setInputText(e.target.value)}}></input>
      <button onClick={() => {
        let copy = [...title];
        if(inputText != '') {
          copy.push(inputText);
        }
        setTitle(copy);

        let copy2 = [...like];
        copy2.push(0);
        setLike(copy2);

        let copy3 = [...date];
        copy3.push(new Date().getFullYear() + '년' + (new Date().getMonth() + 1) + '월'
        + new Date().getDate() + '일');
        setDate(copy3);
        
      }}>글발행</button>
    </div>
  )

    
    
}

function Modal(props) {

  return (
    <div className='modal'>
      <h4>{props.title[props.numTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
