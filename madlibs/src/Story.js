const Story = ({ storyWords, resetStory }) => {
    return (
        <div>
            <h1>
                There was a {storyWords.color} {storyWords.noun1} who loved a{" "}
                {storyWords.adj} {storyWords.noun2}
            </h1>
            <button onClick={resetStory}>RESET</button>
        </div>
    );
};
export default Story;
