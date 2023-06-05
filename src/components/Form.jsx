import { useState } from 'react';

const Form = () => {
    const [worldname, setWorldname] = useState("")

    return (
        <div>
            <p>{worldname}</p>
            <input
                type='text'
                name="worldname"
                placeholder='worldname'
                onChange={(e) => setWorldname(e.target.value)}
            />
        </div>
    );
};

export default Form;