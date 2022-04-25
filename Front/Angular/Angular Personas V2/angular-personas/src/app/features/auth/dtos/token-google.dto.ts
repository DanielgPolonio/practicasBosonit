export interface TokenGoogleDto {
    value: string;
    access_token: string;
}

export function TOKEN_GOOGLE_BLANK(): TokenGoogleDto {
    const aux = {
        value: '',
        access_token: ''
    };
    return Object.assign(aux);
}