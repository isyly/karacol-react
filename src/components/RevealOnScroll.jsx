import { useRef, useEffect, useState } from "react";

const RevealOnScroll = ({ children, threshold = 0.15, className = "", ...props }) => {
	const ref = useRef();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold]);

	return (
		<div
			ref={ref}
			className={
				className +
				(isVisible ? " reveal-on-scroll reveal-on-scroll--visible" : " reveal-on-scroll")
			}
			{...props}
		>
			{children}
		</div>
	);
};

export default RevealOnScroll;
