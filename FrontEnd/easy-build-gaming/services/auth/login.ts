import {isRequestSuccessful} from "../../utils/isRequestSuccessful";
import cookie from 'js-cookie';
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
                    const timeRemaining = new Date(r.data.expires).getTime() - new Date().getTime();
                    const expiringDate = new Date(new Date().getTime() + timeRemaining);
                    cookie.set('access_token', r.data.access_token, { expires: expiringDate });
                    return { status: res.status, data: r.data };
                });
            } else return { status: res.status };
        },
        () => {
            return { status: 500 };
        }
    );
};