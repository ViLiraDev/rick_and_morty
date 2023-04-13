import styles from './about.module.css'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1>Rick and Morty</h1>
            <p>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block, Adult Swim. The series follows the adventures of an alcoholic and nihilistic scientist named Rick Sanchez, who drags his good-hearted but easily influenced grandson Morty Smith on dangerous adventures across the multiverse.</p>
            <p>The show premiered on December 2, 2013, and has since gained a dedicated cult following for its irreverent humor, complex character development, and mind-bending storytelling. It has been praised by critics and fans alike for its creativity, emotional depth, and willingness to push the boundaries of what is possible in animated television.</p>
            <p>If you haven't seen the show yet, we highly recommend giving it a watch. Just be prepared for plenty of sci-fi shenanigans, dark humor, and existential dread!</p>
        </div>
    )
}

export default About;