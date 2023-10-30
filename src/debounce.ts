export default function debounce(func: Function, wait: number) {
    let timeout: NodeJS.Timeout;

    return function(...args: any[]) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
