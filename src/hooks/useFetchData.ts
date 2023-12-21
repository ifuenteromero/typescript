import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";

interface Service<T> {
    getAll: () => { request: Promise<{ data: T[] }>, cancel: () => void };
}

const useFetchData = <T>(service: Service<T>) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const { request, cancel } = service.getAll();

        request
            .then(({ data: savedData }) => setData(savedData))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            })
            .finally(() => setLoading(false));

        return () => cancel();
    }, []);

    return { data, setData, error, setError, isLoading, setLoading };
}

export default useFetchData;
