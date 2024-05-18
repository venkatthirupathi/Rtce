/* eslint-disable react/prop-types */
import  { useRef, useEffect } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/darcula.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import ACTIONS from '../Actions';

const Editor = ({ socketRef, teamID, onCodeChange, codeRef }) => {
  const editorRef = useRef(null);
  let flage = useRef(false);
  let codee = useRef();

  useEffect(() => {
    async function init() {
      if (editorRef.current) {
        return;
      }
      const textarea = document.getElementById('realtimeEditor');
      editorRef.current = Codemirror.fromTextArea(textarea, {
        mode: { name: 'javascript', json: true },
        theme: 'darcula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });

      editorRef.current.on('change', (instance, changes) => {
        editorRef.current.focus();
        const { origin } = changes;
        const code = instance.getValue();
        onCodeChange(code);

        if (origin !== 'setValue') {
          socketRef.current.emit(ACTIONS.CODE_CHANGE, {
            teamID,
            code,
          });
        }
      });

      codeRef.on('value', (snapshot) => {
        codee = snapshot.val();
        if (codee) {
          const cursor = editorRef.current.getCursor(); // Get current cursor position
    editorRef.current.setValue(codee);
    editorRef.current.setCursor(cursor); // Set the cursor back to its previous position
    editorRef.current.focus();
        }
      });
      

     
    }
    init();

    return () => {
      codeRef.off();
    };
  }, []);

  useEffect(() => {
    if (socketRef.current != null) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ teamID: receivedTeamID, code }) => {
        if (receivedTeamID === teamID) {
          editorRef.current.setValue(code);
        }
      });
    }

    return () => {
      if (socketRef.current != null) {
        socketRef.current.off(ACTIONS.CODE_CHANGE);
      }
    };
  }, [socketRef.current]);

  return (
    <div className='editor'>
      <textarea name='text' id='realtimeEditor'></textarea>
    </div>
  );
};

export default Editor;

// ------

// import React, { useEffect, useRef } from 'react';
// import CodeMirror from 'codemirror';
// import * as Y from 'yjs';
// import { WebsocketProvider } from 'y-websocket';
// import { CodemirrorBinding } from 'y-codemirror';
// import 'codemirror/mode/javascript/javascript.js';

// const Editor = ({ socketRef, teamID, onCodeChange, codeRef }) => {
//   const editor = useRef(null);
  
//   useEffect(() => {
//     const ydoc = new Y.Doc();
//     const provider = new WebsocketProvider(
//       'wss://codeliveprojectbackend.onrender.com',
//       teamID,
//       ydoc
//     );
//     const ytext = ydoc.getText('codemirror');
//     const editorContainer = document.createElement('div');
//     editorContainer.setAttribute('id', 'editor');

//     // Append the editor container to its parent element
//     document.querySelector('.righttt').appendChild(editorContainer);

//     editor.current = CodeMirror(editorContainer, {
//       mode: 'javascript',
//       lineNumbers: true
//     });

//     const binding = new CodemirrorBinding(ytext, editor.current, provider.awareness);

//     return () => {
//       provider.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     if (socketRef.current != null) {
//       socketRef.current.on('roomLooked', ({ userName }) => {
//         // Disable editing of the editor
//         console.log("room lock request ")
//         alert("Room is locked by another user");
//         editor.current.setOption('readOnly', true);
        
//       });
//     }
//   }, []);

//   return (
//     <div className='righttt'></div>
//   );
// };

// export default Editor;
