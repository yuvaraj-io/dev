const LongArrow = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100" // Set desired width
        height="20" // Adjust height as needed
        viewBox="0 0 100 20" // Match proportions to the desired width
        fill="none"
    >
        {/* Line */}
        <line
            x1="0"
            y1="10"
            x2="85" // Line endpoint before the arrowhead
            y2="10"
            stroke="blue"
            strokeWidth="2"
        />
        {/* Arrowhead */}
        <polygon
            points="85,5 100,10 85,15" // Arrowhead at the end of the line
            fill="blue"
        />
    </svg>
);

export default LongArrow;
