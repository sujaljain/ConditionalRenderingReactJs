import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Form, Checkbox } from 'semantic-ui-react';
import Question from './Components/Question'; // Import the QuestionForm component
import Article from './Components/Article'; // Import the ArticleForm component
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />

function App() {
  const [option, setOption] = useState('Question');

  return (
    <div className="container">
      <h2><b>New Post</b></h2>
      <hr />
      <div className='form'>
        <Form.Field>
          Selected option: <b>{option}</b>
        </Form.Field>
        <hr />
        <Form.Field>
          <Checkbox
            radio
            label='Choose Question'
            name='checkboxRadioGroup'
            value='Question'
            checked={option === 'Question'}
            onChange={(e, data) => setOption(data.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Choose Article'
            name='checkboxRadioGroup'
            value='Article'
            checked={option === 'Article'}
            onChange={(e, data) => setOption(data.value)}
          />
        </Form.Field>
        <hr />
      </div>
      {option === 'Question' ? <Question /> : null}
      {option === 'Article' ? <Article /> : null}
    </div>
  );
}

export default App;