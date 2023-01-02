import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Portfolio`;

    }, [title]);
};

export default useTitle;