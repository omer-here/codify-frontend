'use client';

import { useState } from "react";
import  Editor  from "@monaco-editor/react";

export default function CodeEditorWindow ({ onChange, language, code }) {
  
    const [value, setValue] = useState(code || "");
    const handleEditorChange = (value) => {
        setValue(value);
        onChange("code", value);
      };
    return (
        <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
          <Editor
            height="85vh"
            width={`100%`}
            language={language || "python"}
            value={value}
            theme="vs-dark"
            defaultValue="// some comment"
            onChange={handleEditorChange}
          />
        </div>
      );
}

