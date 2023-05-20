import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - KiddieWorld`;
    }, [title])
}

export default useTitle;