import React from "react";
import utility from "src/shared/utility";

type StoryProps = {
    story: string;
    length: number;
}

export const Story: React.FC<StoryProps> = (props) => {
    const isDesktop = utility.IsDesktop();
    const story = isDesktop ? 
        props.story :
        props.story.substring(0, props.length);
    
    return (
        <>
            {story} {!isDesktop && <b>... See More</b>}
        </>
    )
}

export default Story
