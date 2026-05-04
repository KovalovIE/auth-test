import { Tokens, User, UserMe } from '../shared/types';

export const mappedUser = (userMe: UserMe, tokens: Tokens): User => {
    return {
        id: userMe.id,
        username: userMe.username,
        email: userMe.email,
        firstName: userMe.firstName,
        lastName: userMe.lastName,
        gender: userMe.gender,
        image: userMe.image,
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
    };
};
