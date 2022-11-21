import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Foodie Server`;
    }, [title])
};

export default useTitle;