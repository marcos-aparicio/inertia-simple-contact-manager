export const Icon = (props) => {
    const { children, ...otherProps } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            {...otherProps}
        >
            {children}
        </svg>
    );
};
