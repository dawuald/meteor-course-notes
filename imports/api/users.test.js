import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import { validateNewUser } from './users';

if (Meteor.isServer) {
    describe('users', function () {
        it('should allow valid email address', function () {
            const user = {
                emails: [{
                    address: 'test@example.com'
                }]
            };
            const res = validateNewUser(user);
            expect(res).toBe(true);
        });

        it('should reject invalid email', function () {
            const user = {
                emails: [{
                    address: 'test'
                }]
            };
            expect(() => {
                validateNewUser(user);
            }).toThrow();
        });
    });
}