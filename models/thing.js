const { Model } = require("objection");

exports.Thing = class Thing extends Model {
    id;
    name;

    static tableName = 'stuff';

    static get = async () => {
        try {
            return {
                ok: true,
                result: await this.query(),
            };
        } catch (error) {
            console.log(error);
            return {
                ok: false,
                result: [],
            };
        }
    };
    
    static insert = async (content) => {
        try {
            return {
                ok: true,
                result: await this.query().insert(content),
            };
        } catch (error) {
            console.log(error);
            return {
                ok: false,
                result: null,
            };
        }
    };
}
