import apiClient from "./api-client";

interface Entity {
    id: number;
}

class HttpService {
    endpoint: string;
    detailedEndpoint: (id: number) => string;

    constructor(_endpoint: string) {
        this.endpoint = _endpoint
        this.detailedEndpoint = (id) => `${_endpoint}/${id}`;
    }

    getAll<T>() {
        const controller = new AbortController();
        const config = { signal: controller.signal };
        const request = apiClient
            .get<T[]>(this.endpoint, config);
        const cancel = () => controller.abort()

        return { request, cancel }
    }

    delete(id: number) {
        return apiClient
            .delete(this.detailedEndpoint(id))
    }

    update<T extends Entity>(entity: T) {
        return apiClient
            .patch(this.detailedEndpoint(entity.id), entity)
    }

    create<T>(entity: T) {
        return apiClient
            .post(this.endpoint, entity)
    }

}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;