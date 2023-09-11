import { useState } from "react";
import MadlibsForm from "./MadlibsForm";
import Story from "./Story";
const Madlibs = () => {
    const [storyWords, setStoryWords] = useState();
    const addStoryWords = (formObj) => {
        setStoryWords(formObj);
    };
    const resetStory = () => {
        setStoryWords();
    };
    if (!storyWords) {
        return <MadlibsForm addStoryWords={addStoryWords} />;
    } else {
        return <Story storyWords={storyWords} resetStory={resetStory} />;
    }
};
export default Madlibs;
