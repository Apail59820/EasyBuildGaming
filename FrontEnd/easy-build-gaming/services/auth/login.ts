import {isRequestSuccessful} from "../../utils/isRequestSuccessful";

export const login = (email: string, password?: string): Promise<{ status: number; data?: string }> => {
    return fetch(`http://localhost:8055/auth/login`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            email,
            password
        }),
    }).then(
        (res) => {
            if (isRequestSuccessful(res.status)) {
                return res.json().then((r) => {
                    return { status: res.status, data: r.data };
                });
            } else return { status: res.status };
        },
        () => {
            return { status: 500 };
        }
    );
};