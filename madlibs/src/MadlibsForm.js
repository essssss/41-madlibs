import { useState } from "react";

const MadlibsForm = ({ addStoryWords }) => {
    const INITIAL_STATE = {
        noun1: "",
        noun2: "",
        adj: "",
        color: "",
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addStoryWords(formData);

        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="noun1"
                type="text"
                name="noun1"
                placeholder="Noun 1"
                value={FormData.noun1}
                onChange={handleChange}
            />
            <br />
            <input
                id="noun2"
                type="text"
                name="noun2"
                placeholder="Noun 2"
                value={FormData.noun2}
                onChange={handleChange}
            />
            <br />
            <input
                id="adj"
                type="text"
                name="adj"
                placeholder="Adjective"
                value={FormData.adv}
                onChange={handleChange}
            />
            <br />
            <input
                id="color"
                type="text"
                name="color"
                placeholder="Color"
                value={FormData.color}
                onChange={handleChange}
            />
            <br />
            <button>Get Story</button>
        </form>
    );
};

export default MadlibsForm;
