import React from 'react';
import ReactQuill from "react-quill";
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css'
function Write() {

  const [value, setValue] = useState('');

  return (
    <div className='write'>
      <div className='add'>
        <div className='content'>
          <input type="text" placeholder='title'/>
          <div className='editorcontainer'>
          
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>status</b> draft
          </span> 
          <span>
            <b>     visibility</b>public
          </span>
          <input type="file" id='file' />
          <label htmlFor="file">  upload file</label>
          <div className='button'>
            <button>save as draft</button>
            <button>update</button>
          </div>
        </div>

        <div className='item'>
          <h1>CATEGORY</h1>
          <input type="radio" name='php' value="variable" id='variable'/>
          <label htmlFor="variable">variable</label>
          <input type="radio" name='php' value="variable" id='variable'/>
          <label htmlFor="variable">variable</label>
          <input type="radio" name='php' value="variable" id='variable'/>
          <label htmlFor="variable">variable</label>
        </div>
      </div>
    </div>
  );
}

export default Write;
